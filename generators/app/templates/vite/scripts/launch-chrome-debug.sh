# Starts Google Chrome with enabled DevTools-Protocol-Port.
#
# Will be called by VS Code preLaunchTask. We start Chrome as detached process,
# so that VS Code doesn't try to terminate the browser on debug stop, otherwise
# all tabs would be lost to the user.
#
# Prerequisite: Google Chrome is installed (apt: google-chrome-stable).
set -euo pipefail

DEBUG_PORT="${CHROME_DEBUG_PORT:-9222}"
USER_DATA_DIR="${HOME}/.cache/vscode-chrome-debug"
PROFILE_DIR="profile-$$"

mkdir -p "${USER_DATA_DIR}"

# Prüfe, ob Chrome schon mit Debug-Port läuft → dann nichts tun.
if curl -sf "http://127.0.0.1:${DEBUG_PORT}/json/version" >/dev/null 2>&1; then
  echo "Chrome debug port ${DEBUG_PORT} is already open."
  exit 0
fi

# Chrome-Binary suchen.
CHROME_BIN="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || true)"
if [[ -z "${CHROME_BIN}" ]]; then
  echo "ERROR: No Chrome/Chromium found." >&2
  echo "Install google-chrome-stable/chromium or adjust the script." >&2
  exit 1
fi

# Run in own session: VS Code will terminate a process group after its tasks exited.
# `nohup` alone is not enough, because Chrome otherwise remains in the group.
nohup setsid --fork "${CHROME_BIN}" \
  --remote-debugging-port="${DEBUG_PORT}" \
  --remote-debugging-address=127.0.0.1 \
  --user-data-dir="${USER_DATA_DIR}/${PROFILE_DIR}" \
  --no-first-run \
  --no-default-browser-check \
  --new-window \
  "http://127.0.0.1:5173/?vscode-debug=true" \
  >/dev/null 2>&1 &

disown || true

# Kurz warten, bis der Port antwortet.
for _ in $(seq 1 30); do
  if curl -sf "http://127.0.0.1:${DEBUG_PORT}/json/version" >/dev/null 2>&1; then
    echo "Chrome started on port ${DEBUG_PORT}."
    exit 0
  fi
  sleep 0.1
done

echo "WARNING: Chrome doesn't respond on port ${DEBUG_PORT}." >&2
exit 1
