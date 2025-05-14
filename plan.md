# 🛠 Oh-My-Poshinator: Dev Plan

A cross-platform Electron app that lets users visually compose **Oh-My-Posh** themes using drag-and-drop blocks, live preview, and config export.

---

## 🧱 Core Features

Each of these maps cleanly to a dev task or function:

### 1. Theme Loader/Parser

- Load `.omp.json` theme files
- Parse JSON into internal component objects
- Support embedded segments and global style settings

### 2. Drag & Drop Editor

- Visual canvas with horizontal layout zones (left, center, right)
- Toolbox of components (`path`, `git`, `az`, etc.)
- Properties pane for each segment (colors, text, icons)

### 3. Live Preview Renderer

- Run Oh-My-Posh with the generated theme and capture output
- Use terminal emulation (`xterm.js`) to show preview
- Optionally simulate PowerShell, bash, etc.

### 4. Theme Exporter

- Convert UI layout back to `.omp.json`
- Download/save or copy-to-clipboard

### 5. Built-in Presets

- Preload common themes (e.g. Jan De Dobbeleer’s own)
- Modify from there or build from scratch

---

## 🧰 Tech Stack

| Concern              | Technology                              |
|----------------------|------------------------------------------|
| App Shell            | Electron                                 |
| Frontend             | React + Tailwind                         |
| State Management     | Zustand or Redux                         |
| Terminal Emulation   | [`xterm.js`](https://xtermjs.org/)       |
| JSON Schema Handling | `ajv` for validation                     |
| Drag-and-Drop        | `dnd-kit` or `react-beautiful-dnd`       |
| CLI Integration      | Node `child_process` for `oh-my-posh`    |

---

## 🔩 Project Structure

```bash
omp-poshinator/
├── public/
├── src/
│   ├── components/
│   │   ├── SegmentEditor.tsx
│   │   ├── Canvas.tsx
│   │   ├── SegmentLibrary.tsx
│   │   ├── TerminalPreview.tsx
│   ├── lib/
│   │   ├── themeParser.ts
│   │   ├── ohMyPoshRunner.ts
│   ├── App.tsx
│   └── main.ts               # Electron main process
├── package.json
└── electron-builder.config.js
```

---

## 📦 Packaging (Single Executable)

Use [`electron-builder`](https://www.electron.build/) to compile into platform-specific binaries:

```bash
npm install --save-dev electron-builder
```

In `package.json`:

```json
"build": {
  "appId": "com.codeclay.ompdesigner",
  "productName": "Oh-My-Poshinator",
  "files": ["dist/**/*", "main.js"],
  "mac": { "target": "dmg" },
  "win": { "target": "nsis" },
  "linux": { "target": "AppImage" }
}
```

Then build:

```bash
npm run build
npm run dist
```

---

## 🚀 Next Steps (Scaffold Timeline)

### ⏱️ First 30 Minutes

- `npx create-electron-app omp-poshinator --template=typescript-webpack`
- Add Tailwind + React UI boilerplate
- Add `xterm.js` with a static fake prompt output

### 🛠️ Hour 2–3

- Add drag-and-drop canvas with hardcoded segments
- Create JSON export from layout
- Run Oh-My-Posh binary and inject export theme (if installed)

---

> _“Hasta la CLI, baby.”_
