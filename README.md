# ![Oh-My-Poshinator Logo](img/Oh-My-Poshinator-Logo.png)

# Oh-My-Poshinator

> **The WYSIWYG Oh-My-Posh Theme Designer.**  
> Drag. Drop. Pimp your prompt.  
> ⚠️ _Currently in early development — nothing works yet._

Oh-My-Poshinator is a local, cross-platform, Electron-based application that will let you visually build and preview [Oh-My-Posh](https://ohmyposh.dev) terminal themes — without editing JSON by hand.

This project is in its **infancy** — we're still scaffolding the layout, figuring out how preview rendering will work, and designing the drag-and-drop system. There are no releases yet.

## ✨ Planned Features

- 🎨 **Drag-and-Drop Editor** — visually build your prompt with segments like `path`, `git`, `az`, and more.
- ⚡ **Live Terminal Preview** — see what your prompt will look like in real time.
- 📦 **Theme Import & Export** — load existing `.omp.json` themes or save your custom creations.
- 🧠 **Built-in Presets** — start with curated themes to get going fast.
- 🖥️ **Cross-platform** — works on Windows, macOS, and Linux.
- 🔌 **Offline & Local** — No telemetry. No cloud dependency.

## 🚧 Status

> This is not ready for use yet. We're currently:
>
> - 🚧 Setting up Electron + React + Tailwind scaffold
> - 🧪 Experimenting with xterm.js and live previews
> - 🧱 Building the segment component model

Follow the project or [open an issue](https://github.com/YourOrg/oh-my-poshinator/issues) if you'd like to contribute ideas or code.

## 📁 Project Structure (Planned)

```bash
src/
├── components/         # UI components
├── lib/                # Theme parsing, OMP runner
├── assets/             # Images, logos, presets
├── main.ts             # Electron main process
└── App.tsx             # React entrypoint
```

## 🛠️ Local Dev Setup (when ready)

```bash
git clone https://github.com/YourOrg/oh-my-poshinator.git
cd oh-my-poshinator
npm install
npm run dev
```

> Requires Node.js, npm, and Git.  
> Oh-My-Posh must be installed and available in your system `PATH` for preview features.

## 📜 License

**GNU General Public License v3.0**

See [`LICENSE`](LICENSE) for full text.

> _“I'll be back... with better prompts.”_
