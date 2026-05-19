import Link from "next/link";
import { PageHeader } from "../../_components/page-header";
import { Prose } from "../_components/prose";

export default function StylingGuide() {
  return (
    <div>
      <PageHeader
        title="Styling"
        description="Tailwind v4 utility classes + shadcn/ui primitives + semantic CSS variables. No custom CSS files, no design tokens to learn."
      />
      <Prose>
        <h2>The rules</h2>
        <ol>
          <li>
            Use{" "}
            <Link href="/design-system/components/button">shadcn primitives</Link>{" "}
            for interactive elements (Button, Input, Dialog, etc.).
          </li>
          <li>
            Use <strong>semantic tokens</strong> (
            <code>bg-primary</code>, <code>text-muted-foreground</code>,{" "}
            <code>border-border</code>) rather than literal colors (
            <code>bg-zinc-100</code>, <code>text-gray-500</code>). Dark mode
            then works for free.
          </li>
          <li>
            Use the default{" "}
            <Link href="/design-system/typography">Tailwind type scale</Link> (
            <code>text-sm</code>, <code>text-lg</code>, <code>font-medium</code>
            ). Don&apos;t introduce custom font sizes.
          </li>
          <li>
            Only edit <code>src/app/globals.css</code> if you really need to —
            and even then, edit the existing token block instead of adding new
            classes.
          </li>
        </ol>

        <h2>Adding a shadcn component</h2>
        <p>
          shadcn isn&apos;t a runtime dependency — it&apos;s a CLI that copies
          source into <code>src/components/ui/</code>. To add a new one:
        </p>
        <pre>
          <code>{`bunx shadcn@latest add accordion calendar checkbox`}</code>
        </pre>
        <p>
          Browse the full catalogue at{" "}
          <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer">
            ui.shadcn.com
          </a>
          .
        </p>

        <h2>The tokens you&apos;ll actually use</h2>
        <p>
          See the live swatches on the{" "}
          <Link href="/design-system/colors">Colors</Link> page. Most of the
          time you only need:
        </p>
        <ul>
          <li>
            <code>bg-background</code> / <code>text-foreground</code> — page chrome
          </li>
          <li>
            <code>bg-card</code> / <code>text-card-foreground</code> — surfaces
            sitting on top of the background
          </li>
          <li>
            <code>bg-muted</code> / <code>text-muted-foreground</code> — quiet
            surfaces and secondary copy
          </li>
          <li>
            <code>bg-primary</code> / <code>text-primary-foreground</code> —
            primary actions
          </li>
          <li>
            <code>bg-destructive</code> — errors and destructive actions
          </li>
          <li>
            <code>border-border</code>, <code>ring-ring</code> — lines and focus
            states
          </li>
        </ul>

        <h2>Useful links</h2>
        <ul>
          <li>
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
              Tailwind CSS docs
            </a>
          </li>
          <li>
            <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
              shadcn/ui
            </a>
          </li>
          <li>
            <a href="https://lucide.dev/icons" target="_blank" rel="noreferrer">
              lucide-react icons
            </a>
          </li>
          <li>
            <a href="https://base-ui.com" target="_blank" rel="noreferrer">
              Base UI
            </a>{" "}
            (the unstyled primitives shadcn wraps)
          </li>
        </ul>
      </Prose>
    </div>
  );
}
