#!/usr/bin/env bash
# Bulletproof setup for the playground.
# Safe to re-run. Designed for people who have never opened a terminal before.
#
#   ./scripts/setup.sh
#
# What it does:
#   1. Checks for git (warns if missing).
#   2. Installs Bun if you don't already have it.
#   3. Runs `bun install`.
#   4. Offers to start the dev server.

set -e

# ---------- pretty output ----------
if [ -t 1 ]; then
  BOLD=$(printf '\033[1m')
  DIM=$(printf '\033[2m')
  RED=$(printf '\033[31m')
  GREEN=$(printf '\033[32m')
  YELLOW=$(printf '\033[33m')
  BLUE=$(printf '\033[34m')
  RESET=$(printf '\033[0m')
else
  BOLD=""; DIM=""; RED=""; GREEN=""; YELLOW=""; BLUE=""; RESET=""
fi

step() { printf "\n${BOLD}${BLUE}==>${RESET} ${BOLD}%s${RESET}\n" "$1"; }
ok()   { printf "    ${GREEN}ok${RESET}    %s\n" "$1"; }
warn() { printf "    ${YELLOW}warn${RESET}  %s\n" "$1"; }
err()  { printf "    ${RED}error${RESET} %s\n" "$1" 1>&2; }
info() { printf "    ${DIM}%s${RESET}\n" "$1"; }

# ---------- header ----------
cat <<'BANNER'

  ┌─────────────────────────────────────────┐
  │   Playground · one-shot setup           │
  └─────────────────────────────────────────┘

BANNER

# ---------- 1. OS sanity ----------
step "Checking your machine"
OS=$(uname -s)
case "$OS" in
  Darwin) ok "macOS detected" ;;
  Linux)  ok "Linux detected" ;;
  MINGW*|MSYS*|CYGWIN*)
    err "Native Windows shells aren't supported."
    info "Install WSL2 (https://learn.microsoft.com/windows/wsl/install) and re-run this script from inside Ubuntu."
    exit 1
    ;;
  *) warn "Unrecognized OS ($OS) - continuing optimistically" ;;
esac

# ---------- 2. git ----------
step "Checking for git"
if command -v git >/dev/null 2>&1; then
  ok "git $(git --version | awk '{print $3}')"
else
  warn "git is not installed."
  info "On macOS: run 'xcode-select --install' to install command-line tools."
  info "On Linux: install with your package manager (e.g. 'sudo apt install git')."
  info "Continuing without git - you won't be able to push your changes to GitHub yet."
fi

# ---------- 3. bun ----------
step "Checking for Bun"
if command -v bun >/dev/null 2>&1; then
  ok "bun $(bun --version)"
else
  warn "Bun is not installed."
  read -r -p "    Install Bun now? [Y/n] " reply
  reply=${reply:-Y}
  if [[ ! "$reply" =~ ^[Yy]$ ]]; then
    err "Bun is required to continue. Install it from https://bun.sh and re-run this script."
    exit 1
  fi

  info "Downloading and installing Bun (this is the official installer from bun.sh)..."
  curl -fsSL https://bun.sh/install | bash

  # The installer puts bun in ~/.bun/bin - source it for this shell session.
  export BUN_INSTALL="${BUN_INSTALL:-$HOME/.bun}"
  export PATH="$BUN_INSTALL/bin:$PATH"

  if ! command -v bun >/dev/null 2>&1; then
    err "Bun installed but isn't on PATH. Open a new terminal window and re-run this script."
    exit 1
  fi
  ok "bun $(bun --version) installed"
  info "Add this to your shell profile so future terminals find Bun:"
  info "  export BUN_INSTALL=\"\$HOME/.bun\""
  info "  export PATH=\"\$BUN_INSTALL/bin:\$PATH\""
fi

# ---------- 4. install ----------
step "Installing dependencies"
bun install
ok "dependencies installed"

# ---------- 5. start? ----------
step "All set"
cat <<DONE
    The playground is ready at http://localhost:4000

    Useful commands:
      ${BOLD}bun dev${RESET}         Start the dev server (port 4000)
      ${BOLD}bun run lint${RESET}    Run ESLint
      ${BOLD}bun run build${RESET}   Production build

DONE

read -r -p "    Start the dev server now? [Y/n] " reply
reply=${reply:-Y}
if [[ "$reply" =~ ^[Yy]$ ]]; then
  step "Starting bun dev"
  exec bun dev
fi

printf "    %sRun '%sbun dev%s' whenever you're ready.%s\n\n" "$DIM" "$BOLD" "$DIM$DIM" "$RESET"
