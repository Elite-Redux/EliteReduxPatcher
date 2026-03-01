# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pokemon Elite Redux Patcher — a static single-page web app for applying ROM patches in the browser. Fork of [Marc Robledo's RomPatcher.js v2.8.1](https://github.com/marcrobledo/RomPatcher.js), customized for the Pokemon Elite Redux ROM hack. Hosted on GitHub Pages at `elite-redux.com`.

## Development

No build tools, package manager, linter, or tests. Pure vanilla HTML/CSS/JS served as static files.

To develop locally, serve with any static file server:
```
python3 -m http.server 8080
# or
npx serve .
```

Deploy by pushing to `master` — GitHub Pages serves automatically.

## Architecture

### Entry Point
`index.html` — single HTML page containing all UI structure and the `CUSTOM_PATCHER` config (inline `<script>` block).

### CUSTOM_PATCHER Config
The patch dropdown is driven by a `var CUSTOM_PATCHER` array in `index.html`. Each entry has:
- `file` — relative path to the patch file (in repo root)
- `name` — display name shown in the dropdown
- `crc` — CRC32 of the expected source ROM (`0xd5ec24e4` for clean Pokemon Emerald)

The **first entry is the default**. When `CUSTOM_PATCHER` is defined, the file input becomes a `<select>` dropdown, and patch creation mode is hidden.

Patch file naming convention: `Pokemon Elite Redux v{version}.{bps|ups}` (e.g., `Pokemon Elite Redux v2.65-beta.bps`).

### Key JS Files
| File | Role |
|---|---|
| `js/RomPatcher.js` | Core app: UI, event handling, `CUSTOM_PATCHER` logic, web worker management, patch application/creation orchestration |
| `js/MarcFile.js` | Binary file abstraction wrapping ArrayBuffer/DataView with seek/read/write methods |
| `js/crc.js` | CRC32, MD5, SHA-1, Adler-32 checksums |
| `js/formats/*.js` | Format parsers (IPS, UPS, BPS, APS, PPF, RUP, PMSR, VCDiff). Each exports: constructor, `parse*File()`, `create*FromFiles()`, prototype `.apply()` and `.export()` |
| `js/worker_apply.js` | Web Worker for patch application (zero-copy via transferable ArrayBuffers) |
| `js/worker_create.js` | Web Worker for patch creation |
| `js/worker_crc.js` | Web Worker for CRC calculation |
| `js/EliteRedux.js` | Elite Redux-specific JS (FAQ accordion) |

### CSS
- `style/RomPatcher.css` — upstream base styles (rarely modify)
- `style/EliteRedux.css` — all Elite Redux visual overrides (primary color `#41bdc7`, Poppins font, dark theme)

### Patch Files
Large `.bps`/`.ups` files (up to ~33 MB) committed directly in the repo root. Older versions may live in `old/`.

## Coding Conventions

- ES5/ES6 hybrid: `var` used heavily, prototype-based classes (no `class` keyword)
- Global scope via `<script>` tags, no modules
- `el(id)` shorthand for `document.getElementById`, `addEvent()` for `addEventListener`
- Format modules follow a consistent pattern: magic constant, constructor, prototype methods (`.apply()`, `.export()`, `.toString()`), `parse*File()`, `create*FromFiles()`
- camelCase for variables/functions, ALL_CAPS for constants
