// Starts the Vite-Dev-Server with a fixed PID and cleans up after the debug session,
// so that the port 5173 is free after the debug session.
//
// VS Code stops the Node process started via "type":"node"/"request":"launch"
// reliably when the debug session is stopped, in contrast to Background-Shells.

import { spawn } from 'node:child_process';
import { writeFileSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';

const workspaceRoot = resolve(import.meta.dirname, '..');
const viteBin = resolve(workspaceRoot, 'node_modules', '.bin', 'vite');

const child = spawn(viteBin, ['dev', '--host', '127.0.0.1'], {
  cwd: workspaceRoot,
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env },
});

writeFileSync(resolve(workspaceRoot, '.vite-dev.pid'), String(child.pid));

let stdoutBuffer = '';
let stderrBuffer = '';

child.stdout.on('data', (chunk) => {
  process.stdout.write(chunk);
  stdoutBuffer += chunk.toString();
});
child.stderr.on('data', (chunk) => {
  process.stderr.write(chunk);
  stderrBuffer += chunk.toString();
});

const shutdown = (signal) => {
  // Kind-Prozess zuerst beenden, damit der Port freigegeben wird.
  try {
    child.kill(signal);
  } catch {}
  setTimeout(() => {
    try {
      unlinkSync(resolve(workspaceRoot, '.vite-dev.pid'));
    } catch {}
    process.exit(0);
  }, 500);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

child.on('exit', (code) => {
  try {
    unlinkSync(resolve(workspaceRoot, '.vite-dev.pid'));
  } catch {}
  process.exit(code ?? 0);
});