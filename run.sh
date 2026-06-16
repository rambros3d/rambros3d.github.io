#!/bin/bash
set -euo pipefail
git submodule update --init --recursive
npm run dev -- --port 8686
