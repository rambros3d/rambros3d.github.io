#!/bin/bash
set -euo pipefail
git submodule update --init --recursive
npm install
npm run dev -- --host 0.0.0.0 --port 8686
