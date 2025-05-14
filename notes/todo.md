# Task Backlog (TODOs & Ideas)

## 2024-03-19

### 🔧 Project Setup
**File/Context:** `package.json`  
**Type:** 🚧 Improvement

**Summary:**  
Initial project setup with Electron, React, and TypeScript.

**Notes:**  
- Need to set up the basic Electron app structure
- Configure TypeScript and webpack
- Add React and Tailwind CSS
- Set up development environment

### 🔧 Theme Loader Implementation
**File/Context:** `src/lib/themeParser.ts`  
**Type:** 🚧 Improvement

**Summary:**  
Create the theme parser module to handle .omp.json files.

**Notes:**  
- Need to implement JSON schema validation
- Handle embedded segments
- Support global style settings
- Consider error handling for malformed themes

### 🔧 Drag & Drop Editor Foundation
**File/Context:** `src/components/Canvas.tsx`  
**Type:** 🚧 Improvement

**Summary:**  
Implement the basic drag and drop canvas with layout zones.

**Notes:**  
- Research dnd-kit vs react-beautiful-dnd
- Design component hierarchy
- Plan state management approach
- Consider undo/redo functionality

### 🔧 Terminal Preview Integration
**File/Context:** `src/components/TerminalPreview.tsx`  
**Type:** 🚧 Improvement

**Summary:**  
Set up xterm.js integration for live preview.

**Notes:**  
- Research xterm.js configuration options
- Plan terminal emulation approach
- Consider shell simulation requirements
- Design preview update mechanism 