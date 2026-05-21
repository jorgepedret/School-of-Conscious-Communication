# School of Conscious Communication

This repository contains the website for the School of Conscious Communication. It hosts the site's code, components, and static assets used to present projects, resources, and community information.

Origin: This project was initially scaffolded using lovable.dev. The site and repository have been adapted and are maintained locally from this codebase.

## Local Development Setup

This guide walks you through setting up and running the School of Conscious Communication website on your local machine.

### Prerequisites

You need **Node.js v18 or higher** and a package manager. Choose one:
- **npm** (comes with Node.js) — recommended for all platforms
- **Bun** (optional, faster) — our primary package manager

**Install Node.js:**
- **macOS**: Download from [nodejs.org](https://nodejs.org/) or use Homebrew: `brew install node`
- **Windows**: Download from [nodejs.org](https://nodejs.org/) or use Chocolatey: `choco install nodejs`
- **Linux**: Use your package manager:
  - Ubuntu/Debian: `sudo apt-get install nodejs npm`
  - Fedora: `sudo dnf install nodejs npm`
  - Arch: `sudo pacman -S nodejs npm`

**Optional: Install Bun** (for faster installs)
- **macOS/Linux**: `curl -fsSL https://bun.sh/install | bash`
- **Windows**: `powershell -c "irm bun.sh/install.ps1 | iex"`

### Getting Started

#### 1. Clone the repository

**macOS/Linux:**
```sh
git clone <YOUR_GIT_URL>
cd School-of-Conscious-Communication
```

**Windows (Command Prompt):**
```cmd
git clone <YOUR_GIT_URL>
cd School-of-Conscious-Communication
```

**Windows (PowerShell):**
```powershell
git clone <YOUR_GIT_URL>
cd School-of-Conscious-Communication
```

#### 2. Install dependencies

Choose your package manager:

**Using npm (all platforms):**
```sh
npm install
```

**Using Bun (macOS/Linux):**
```sh
bun install
```

**Using Bun (Windows):**
```powershell
bun install
```

#### 3. Start the development server

**Using npm:**
```sh
npm run dev
```

**Using Bun:**
```sh
bun run dev
```

The terminal will display a local URL (typically `http://localhost:5173`). Open this in your browser. The site auto-reloads when you save changes.

### Building for Production

**Using npm:**
```sh
npm run build
```

**Using Bun:**
```sh
bun run build
```

This generates a `dist/` folder with compiled static files ready for deployment.

### Available Commands

- `npm run dev` or `bun run dev` — Start development server
- `npm run build` or `bun run build` — Create production build
- `npm run preview` or `bun run preview` — Preview production build locally
- `npm run lint` or `bun run lint` — Run ESLint

## Editing the code

- Use your preferred IDE (for example, `Visual Studio Code`).
- The app source is in `app/` and component files are under `app/src/components/`.
- Make changes, test locally, then commit and push to your Git remote.

## What this project is about

This site presents the School of Conscious Communication's projects, resources, and founder information. It is structured as a modern React + Vite app with reusable UI components and sections for projects, resources, and subscription/contact functionality.

## Technologies

- Bun
- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn-ui components

## Notes

## License

This project is licensed under the MIT License.

Copyright (c) 2025 Elijah Ignatieff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.