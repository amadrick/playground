import { PageHeader } from "../../_components/page-header";
import { Prose } from "../_components/prose";

export default function AddPrototypeGuide() {
  return (
    <div>
      <PageHeader
        title="Add a prototype"
        description="Every prototype is a folder in src/app/. Two ways to create one."
      />
      <Prose>
        <h2>From the UI (dev only)</h2>
        <p>
          Click <strong>+ New prototype</strong> in the top bar on the home
          page. Pick a title — the playground slugifies it and scaffolds:
        </p>
        <pre>
          <code>{`src/app/<your-slug>/
  page.tsx          starter component (shadcn Button + Badge)
  metadata.json     title, description, tags, createdAt`}</code>
        </pre>
        <p>
          You&apos;ll be redirected to <code>/&lt;your-slug&gt;</code>{" "}
          immediately. The button only appears in <code>NODE_ENV=development</code>{" "}
          because hosted Vercel deploys are read-only.
        </p>

        <h2>Manually (also works in dev)</h2>
        <p>Copy the starter template:</p>
        <pre>
          <code>{`cp -r src/app/_example/hello-world src/app/my-cool-thing`}</code>
        </pre>
        <p>
          Edit <code>src/app/my-cool-thing/page.tsx</code> and refresh — it
          shows up in the index.
        </p>

        <h2>metadata.json</h2>
        <p>Optional, but useful. All fields are optional:</p>
        <pre>
          <code>{`{
  "title": "My cool thing",
  "description": "Testing an interaction pattern",
  "tags": ["animation", "navigation"],
  "createdAt": "2026-05-19T00:00:00.000Z"
}`}</code>
        </pre>
        <p>
          Without <code>title</code>, the folder name is turned into Title Case.
          Without <code>createdAt</code>, the folder&apos;s filesystem birth
          time is used for sorting.
        </p>

        <h2>Reserved folder names</h2>
        <p>
          A few top-level segments under <code>src/app/</code> aren&apos;t
          treated as prototypes:
        </p>
        <ul>
          <li>
            <code>api</code>, <code>design-system</code> — reserved app routes
          </li>
          <li>
            Anything starting with <code>_</code> (e.g. <code>_example</code>)
            or <code>.</code>
          </li>
        </ul>
        <p>Don&apos;t use those as slugs.</p>

        <h2>Renaming or deleting</h2>
        <p>
          There&apos;s no UI for it — just rename or <code>rm -rf</code> the
          folder. The index updates on next refresh.
        </p>
      </Prose>
    </div>
  );
}
