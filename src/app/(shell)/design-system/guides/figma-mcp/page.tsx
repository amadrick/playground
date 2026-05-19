import { PageHeader } from "../../_components/page-header";
import { Prose } from "../_components/prose";

export default function FigmaMcpGuide() {
  return (
    <div>
      <PageHeader
        title="Figma MCP"
        description="Connect Figma to your editor so you can implement designs straight from a node URL."
      />
      <Prose>
        <h2>What is MCP?</h2>
        <p>
          <a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer">
            Model Context Protocol
          </a>{" "}
          is a standard for letting AI coding tools talk to external services.
          The{" "}
          <a
            href="https://help.figma.com/hc/en-us/articles/32132100833559"
            target="_blank"
            rel="noreferrer"
          >
            Figma MCP server
          </a>{" "}
          exposes your Figma files to Cursor / Claude / VS Code — the agent can
          read a node&apos;s structure, screenshot, variables, and Code Connect
          mappings, then implement it in your codebase.
        </p>

        <h2>Setup in Cursor</h2>
        <ol>
          <li>
            Open <strong>Cursor Settings</strong> →{" "}
            <strong>Tools &amp; MCP</strong>.
          </li>
          <li>
            Find <strong>Figma</strong> in the plugin list and click{" "}
            <strong>Install</strong> (or add it manually via the MCP config).
          </li>
          <li>
            Authenticate with your Figma account when prompted. You should see a
            green check next to the Figma tools.
          </li>
        </ol>
        <p>
          If you prefer manual configuration, the server runs locally via the
          official Figma desktop app. See the{" "}
          <a
            href="https://help.figma.com/hc/en-us/articles/32132100833559"
            target="_blank"
            rel="noreferrer"
          >
            Figma MCP docs
          </a>{" "}
          for the latest setup instructions.
        </p>

        <h2>Day-to-day workflow</h2>
        <p>
          In Figma, right-click any frame or component → <strong>Copy link</strong>.
          Then in chat:
        </p>
        <pre>
          <code>{`Implement this Figma node in a new prototype:
https://www.figma.com/design/<fileKey>/...?node-id=12-345`}</code>
        </pre>
        <p>
          The agent will pull the design context, scaffold a prototype folder,
          and build the UI using the shadcn primitives in this project.
        </p>

        <h2>Useful prompts</h2>
        <ul>
          <li>
            <em>&ldquo;Get the design context for &lt;url&gt; and implement it&rdquo;</em>
            — design-to-code
          </li>
          <li>
            <em>&ldquo;Take a screenshot of &lt;url&gt; so I can see it&rdquo;</em>{" "}
            — just inspect
          </li>
          <li>
            <em>&ldquo;Push the current page to Figma as a new frame&rdquo;</em>{" "}
            — code-to-design
          </li>
        </ul>

        <h2>Tips</h2>
        <ul>
          <li>
            Keep Figma frames focused. Implementing a whole canvas at once
            rarely goes well — pick a section.
          </li>
          <li>
            Mention which shadcn components to use if the design has a specific
            primitive in mind (e.g. &ldquo;use a Dialog, not a Sheet&rdquo;).
          </li>
          <li>
            For repeated patterns, set up{" "}
            <a
              href="https://www.figma.com/code-connect-docs/"
              target="_blank"
              rel="noreferrer"
            >
              Code Connect
            </a>{" "}
            so the agent picks the right component automatically.
          </li>
        </ul>
      </Prose>
    </div>
  );
}
