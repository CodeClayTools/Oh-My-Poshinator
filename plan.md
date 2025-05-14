# 🛠 Oh-My-Poshinator: Dev Plan

A cross-platform Electron app that lets users visually compose **Oh-My-Posh** themes using drag-and-drop blocks, live preview, and config export.

---

## 🧱 Core Features

Each of these maps cleanly to a dev task or function:

### 1. Theme Loader/Parser ✅

- ✅ Load `.omp.json` theme files
- ✅ Parse JSON into internal component objects
- ✅ Support embedded segments and global style settings
- ✅ JSON Schema validation with `ajv`
- ✅ Type-safe theme interfaces
- ✅ Comprehensive test suite

### 2. Drag & Drop Editor (Next Up)

- Visual canvas with horizontal layout zones (left, center, right)
- Toolbox of components (`path`, `git`, `az`, etc.)
- Properties pane for each segment (colors, text, icons)
- Real-time theme updates
- Undo/redo support

### 3. Live Preview Renderer

- Run Oh-My-Posh with the generated theme and capture output
- Use terminal emulation (`xterm.js`) to show preview
- Optionally simulate PowerShell, bash, etc.

### 4. Theme Exporter

- Convert UI layout back to `.omp.json`
- Download/save or copy-to-clipboard

### 5. Built-in Presets

- Preload common themes (e.g. Jan De Dobbeleer's own)
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

### ✅ Completed

- ✅ Set up TypeScript project structure
- ✅ Implement theme parser with JSON Schema validation
- ✅ Create comprehensive test suite
- ✅ Add type definitions for themes and segments

### 🛠️ Current Sprint (Drag & Drop Editor)

1. Set up React + Tailwind environment
   - Initialize React project
   - Configure Tailwind CSS
   - Set up component structure

2. Implement basic canvas layout
   - Create three-zone layout (left, center, right)
   - Add basic styling and responsiveness
   - Implement zone highlighting for drop targets

3. Create segment components
   - Build segment card components
   - Implement drag handles
   - Add basic segment properties panel

4. Add drag-and-drop functionality
   - Integrate `dnd-kit` or `react-beautiful-dnd`
   - Implement drag preview
   - Add drop zone validation

### 📋 Future Tasks

- Live preview integration with `xterm.js`
- Theme export functionality
- Preset theme library
- Electron app packaging

---

> _"Hasta la CLI, baby."_
