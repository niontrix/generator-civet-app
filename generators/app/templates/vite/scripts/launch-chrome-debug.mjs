// Starts Google Chrome with enabled DevTools-Protocol-Port.
// Called by VS Code preLaunchTask. Chrome is started detached so VS Code
// doesn't kill the browser on debug-stop (preserves the user's tabs).

import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { createConnection } from 'node:net';

const DEBUG_PORT = Number(process.env.CHROME_DEBUG_PORT ?? 9222);
const USER_DATA_DIR = join(process.env.HOME, '.cache', 'vscode-chrome-debug');
const PROFILE_DIR = `profile-${process.pid}`;
const TARGET_URL = 'http://127.0.0.1:5173/?vscode-debug=true';

mkdirSync(USER_DATA_DIR, { recursive: true });

// Helper: TCP-Probe instead of curl. Is faster and has no external dependency.
const waitForPort = (port, attempts = 30, delayMs = 100) =>
  new Promise((resolve, reject) => {
    const tryOnce = (left) => {
      const sock = createConnection({ host: '127.0.0.1', port }, () => {
        sock.end();
        resolve();
      });
      sock.on('error', () => {
        if (left <= 1) reject(new Error(`port ${port} not responding`));
        else setTimeout(() => tryOnce(left - 1), delayMs);
      });
    };
    tryOnce(attempts);
  });

const findChrome = () => {
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium']) {
    // which.isexe wird nicht benötigt — wir verlassen uns auf `which` über die PATH des Kindes.
    const probe = spawn('which', [name], { stdio: 'ignore' });
    probe.on('exit', (code) => {
      // asynchron, aber wir nutzen eine synchronere Variante unten
    });
  }
  // Pragma: synchron via `command -v` würde `child_process.execSync` benötigen.
  // Für die Kürze: einfache Suche in PATH.
  const pathDirs = (process.env.PATH ?? '').split(':');
  for (const dir of pathDirs) {
    for (const name of ['google-chrome', 'google-chrome-stable', 'chromium']) {
      const candidate = join(dir, name);
      try {
        const stat = require('node:fs').statSync(candidate);
        if (stat.isFile()) return candidate;
      } catch {}
    }
  }
  return null;
};

try {
  await waitForPort(DEBUG_PORT, 1, 0);
  console.log(`Chrome debug port ${DEBUG_PORT} is already open.`);
  process.exit(0);
} catch {
  // Port is free. Open Chrome.
}

const chromeBin = findChrome();
if (!chromeBin) {
  console.error('ERROR: No Chrome/Chromium found.');
  console.error('Install google-chrome-stable/chromium or adjust the script.');
  process.exit(1);
}

// detached: true + stdio:'ignore' setzt den Kindprozess in eine eigene Process-Group.
// `subprocess.unref()` erlaubt Node zu beenden, ohne auf den Kindprozess zu warten.
const child = spawn(
  chromeBin,
  [
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--remote-debugging-address=127.0.0.1',
    `--user-data-dir=${join(USER_DATA_DIR, PROFILE_DIR)}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--new-window',
    TARGET_URL,
  ],
  {
    detached: true,
    stdio: 'ignore',
 env: process.env,
  },
);
child.unref();

try {
  await waitForPort(DEBUG_PORT);
  console.log(`Chrome started on port ${DEBUG_PORT}.`);
} catch (err) {
  console.error(`WARNING: Chrome doesn't respond on port ${DEBUG_PORT}: ${err.message}`);
  process.exit(1);
}