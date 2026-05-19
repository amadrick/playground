# Playground

A starter playground for design-to-code experiments. Every prototype is a folder. The chrome, the design system, and the guides are already wired up — you just open it and start building.

Built on [Next.js](https://nextjs.org) + [shadcn/ui](https://ui.shadcn.com) + [Tailwind CSS](https://tailwindcss.com). No auth, no custom tokens, no bespoke chrome — just the basics, beautifully.

---

## 1. What you get

- A homepage that lists every prototype you've added.
- A design-system gallery (Foundations + Components) you can copy and paste from.
- Five short in-app guides that walk you through everything once it's running.
- A one-line installer (`./scripts/setup.sh`) that handles all the setup.

## 2. Get your own copy

You have two options. **If you're not sure, pick the first one.**

### Option A: Use this template (recommended)

This makes a clean, fresh copy of the project in your GitHub account, with no history attached.

1. Click the big green **Use this template** button at the top of this page → **Create a new repository**.
2. Pick a name (e.g. `my-playground`), choose **Public** or **Private**, and click **Create repository**.
3. You now own a brand-new repo. Move on to step 3 below.

The full visual walkthrough lives in [GitHub's docs](https://docs.github.com/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

### Option B: Fork

Use this only if you want to receive future updates from the original. Click **Fork** in the top-right of this page.

## 3. Clone it to your computer

"Cloning" means copying the repo from GitHub down to your laptop so you can edit it.

### With GitHub Desktop (easiest)

If you've never used Terminal, this is the path for you.

1. Install [GitHub Desktop](https://desktop.github.com) and sign in.
2. **File → Clone repository** → pick your new repo from the list → choose where to save it → **Clone**.
3. GitHub Desktop will show you where it saved the folder. Remember that path.

### With Terminal

If you're comfortable with the command line:

```bash
cd ~/Documents
gh repo clone <your-username>/<your-repo>
```

(Or `git clone https://github.com/<your-username>/<your-repo>.git` if you don't have the [GitHub CLI](https://cli.github.com) installed.)

## 4. Run it

Open Terminal (on macOS: press `Cmd + Space`, type "Terminal", hit Enter). Then:

```bash
cd <your-repo>
./scripts/setup.sh
```

That's the whole install. The script will:

1. Check your operating system.
2. Install [Bun](https://bun.sh) if you don't have it (it'll ask first).
3. Install all the project's dependencies.
4. Offer to start the dev server for you.

When it's done, open [http://localhost:4000](http://localhost:4000). You'll see the playground.

**Windows users:** install [WSL2](https://learn.microsoft.com/windows/wsl/install) first, then run the steps above from inside Ubuntu.

## 5. Let AI help you build (recommended)

If you're new to code, install [Claude Code](https://www.anthropic.com/claude-code) — Anthropic's terminal AI agent. It can read every file in this project, follow the in-app guides for you, and build prototypes from a plain-English description.

Install once:

```bash
npm install -g @anthropic-ai/claude-code
```

Then, from inside your project folder:

```bash
claude
```

A chat opens in your terminal. Try prompts like:

- "Read the guides at `src/app/(shell)/design-system/guides/` and then add a new prototype called `pricing-page`."
- "Implement this Figma node as a new prototype: https://www.figma.com/design/..."
- "Refactor `src/app/<slug>/page.tsx` to use the shadcn Card component."
- "Why isn't dark mode flipping on this page?"

You don't need to know what any of the code does — Claude Code does. It even runs `bun dev` and `bun run lint` on its own to check its work.

[Cursor](https://cursor.com), [Codex](https://github.com/openai/codex), and other AI editors work too — anything that can read your project folder is a good fit for this playground.

## 6. Edit it by hand

Everything you need to know lives inside the running app. Open these in your browser once the dev server is up:

- [Getting started](http://localhost:4000/design-system/guides/getting-started) — re-cap of install
- [Add a prototype](http://localhost:4000/design-system/guides/add-a-prototype) — the most important page
- [Styling](http://localhost:4000/design-system/guides/styling) — how to use Tailwind + shadcn
- [Figma MCP](http://localhost:4000/design-system/guides/figma-mcp) — connect Figma to your editor
- [Deploy](http://localhost:4000/design-system/guides/deploy) — ship it to the web

The short version: to add a prototype, either click **+ New** on the homepage, or copy the folder at `src/app/_example/hello-world/` to `src/app/<your-slug>/` and edit `page.tsx`.

## 7. Push your changes

When you've made something you want to save:

### With GitHub Desktop

1. In GitHub Desktop, you'll see a list of files you changed on the left.
2. Type a short summary at the bottom (e.g. "Add login prototype").
3. Click **Commit to main**, then click **Push origin** at the top.

### With Terminal

```bash
git add -A
git commit -m "What I changed"
git push
```

Your changes are now backed up on GitHub.

## 8. Tech stack

- [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (built on [Base UI](https://base-ui.com))
- [lucide-react](https://lucide.dev) for icons
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [Bun](https://bun.sh) as the runtime + package manager

## 9. License

[MIT](LICENSE). Use it however you like.
