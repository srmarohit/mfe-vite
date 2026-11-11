# mfe-vite

A micro-frontend (MFE) project built with **Vite**. A host (shell) application loads independently built and deployed frontend modules at runtime.

<!-- TODO: Replace every TODO below with details from the repository. This is a template, not a verified description. -->

---

## ✨ Features

- Host (shell) application that composes remote micro-frontends
- Independently developed and deployable remotes
- Fast dev server and builds with Vite
- <!-- TODO: add real features (shared state, routing, auth, shared UI library, etc.) -->

---

## 🧰 Tech Stack

<!-- TODO: confirm against each app's package.json -->

| Area             | Technology                                              |
| ---------------- | ------------------------------------------------------- |
| Build tool       | Vite                                                    |
| UI library       | TODO (React / Vue / other)                              |
| Language         | TODO (TypeScript / JavaScript)                          |
| MFE integration  | TODO (e.g. `@originjs/vite-plugin-federation`, import maps) |

---

## 📁 Project Structure

<!-- TODO: replace with the real folder tree -->

```
.
├── host/        # Shell application (TODO: confirm name)
├── remote-*/    # Remote micro-frontends (TODO: confirm names)
└── package.json
```

---

## ✅ Prerequisites

- Node.js 20.19+ or 22.12+
- npm (or pnpm / yarn)

---

## 🚀 Getting Started

```bash
git clone https://github.com/srmarohit/mfe-vite.git
cd mfe-vite
```

Install and run each app (TODO: confirm folder names and ports):

```bash
# Remote(s)
cd <remote-folder>
npm install
npm run build
npm run preview      # or the script used in this repo

# Host
cd ../<host-folder>
npm install
npm run dev
```

> With Vite Module Federation, remotes often need to be **built and served** before the host can load them. Start remotes first, then the host.

| App    | Command        | URL                      |
| ------ | -------------- | ------------------------ |
| Host   | `npm run dev`  | http://localhost:TODO    |
| Remote | `npm run ...`  | http://localhost:TODO    |

---

## ⚙️ Configuration

Describe how the host finds its remotes (for example the `remotes` entry in `vite.config.ts`) and any environment variables:

```ts
// TODO: paste the relevant vite.config.ts snippet
```

---

## 🛠️ Troubleshooting

| Problem | Fix |
| ------- | --- |
| Host cannot load a remote | Make sure the remote is built and running, and that the remote URL and port match the host config. |
| CORS errors | Allow the host origin on the remote's dev/preview server. |
| Duplicate React (or other) instances | Mark shared libraries as `shared` singletons in the federation config. |
| Port already in use | Give every app a unique port in `vite.config.ts`. |

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push and open a Pull Request

## 📄 License

TODO: add license information.
