import Link from "next/link";
import { PageHeader } from "../../_components/page-header";
import { Prose } from "../_components/prose";

export default function GettingStartedGuide() {
  return (
    <div>
      <PageHeader
        title="Getting started"
        description="One command installs everything. Built for people who have never opened a terminal before."
      />
      <Prose>
        <h2>The one-line install</h2>
        <p>After you&apos;ve cloned the repo, from the project root run:</p>
        <pre>
          <code>{`./scripts/setup.sh`}</code>
        </pre>
        <p>That&apos;s it. The script:</p>
        <ul>
          <li>
            checks your OS (macOS / Linux supported; Windows needs{" "}
            <a
              href="https://learn.microsoft.com/windows/wsl/install"
              target="_blank"
              rel="noreferrer"
            >
              WSL2
            </a>
            )
          </li>
          <li>
            installs{" "}
            <a href="https://bun.sh" target="_blank" rel="noreferrer">
              Bun
            </a>{" "}
            for you if you don&apos;t already have it
          </li>
          <li>
            runs <code>bun install</code>
          </li>
          <li>offers to start the dev server on port 4000</li>
        </ul>
        <p>
          The script is safe to re-run any time — it skips steps that are
          already done.
        </p>

        <h2>Cloning</h2>
        <p>If you&apos;re the first person setting this up:</p>
        <pre>
          <code>{`# Using GitHub CLI
gh repo create my-playground --private --source=. --remote=origin --push

# Or manually
git remote add origin git@github.com:<you>/my-playground.git
git branch -M main
git push -u origin main`}</code>
        </pre>
        <p>Teammates clone like normal:</p>
        <pre>
          <code>{`git clone git@github.com:<you>/my-playground.git
cd my-playground
./scripts/setup.sh`}</code>
        </pre>

        <h2>Already have Bun?</h2>
        <p>Skip the script and run:</p>
        <pre>
          <code>{`bun install
bun dev`}</code>
        </pre>

        <h2>First edit</h2>
        <p>
          Head to{" "}
          <Link href="/design-system/guides/add-a-prototype">
            Add a prototype
          </Link>{" "}
          next.
        </p>

        <h2>Scripts</h2>
        <ul>
          <li>
            <code>./scripts/setup.sh</code> — one-shot install + start
          </li>
          <li>
            <code>bun dev</code> — dev server on port 4000
          </li>
          <li>
            <code>bun build</code> — production build
          </li>
          <li>
            <code>bun start</code> — run the production build
          </li>
          <li>
            <code>bun run lint</code> — ESLint
          </li>
          <li>
            <code>bun run typecheck</code> — <code>tsc --noEmit</code>
          </li>
          <li>
            <code>bun run format</code> — Prettier
          </li>
        </ul>
      </Prose>
    </div>
  );
}
