import Link from "next/link";
import { PageHeader } from "../../_components/page-header";
import { Prose } from "../_components/prose";

export default function DeployGuide() {
  return (
    <div>
      <PageHeader
        title="Deploy"
        description="Ship the playground to Vercel so the rest of the team can browse prototypes from a URL."
      />
      <Prose>
        <h2>1. Push to GitHub</h2>
        <p>
          If you haven&apos;t already, follow{" "}
          <Link href="/design-system/guides/getting-started">
            Getting started
          </Link>{" "}
          step 2 to create a remote repository.
        </p>

        <h2>2. Import on Vercel</h2>
        <ol>
          <li>
            Go to{" "}
            <a href="https://vercel.com/new" target="_blank" rel="noreferrer">
              vercel.com/new
            </a>{" "}
            and import the repo.
          </li>
          <li>
            Framework: <strong>Next.js</strong> (auto-detected).
          </li>
          <li>
            Build command: <code>bun run build</code>. Install command:{" "}
            <code>bun install</code>.
          </li>
          <li>
            No environment variables required — this playground has no auth or
            secrets.
          </li>
          <li>Click Deploy.</li>
        </ol>

        <h2>3. What changes in production</h2>
        <ul>
          <li>
            The <strong>+ New prototype</strong> button is hidden — the
            serverless filesystem isn&apos;t writable. Scaffold prototypes
            locally and push.
          </li>
          <li>
            Everything else (the index, the design system, every prototype)
            works identically.
          </li>
        </ul>

        <h2>4. Optional: custom domain</h2>
        <p>
          Settings → Domains in the Vercel dashboard. Add a subdomain like{" "}
          <code>playground.your-team.com</code> and follow the DNS instructions.
        </p>

        <h2>5. Iterating</h2>
        <p>
          Every push to <code>main</code> auto-deploys. Branches get preview
          URLs — handy for sharing a work-in-progress prototype without
          touching production.
        </p>

        <h2>Useful links</h2>
        <ul>
          <li>
            <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">
              Vercel docs
            </a>
          </li>
          <li>
            <a
              href="https://nextjs.org/docs/app/getting-started/deploying"
              target="_blank"
              rel="noreferrer"
            >
              Next.js deployment guide
            </a>
          </li>
        </ul>
      </Prose>
    </div>
  );
}
