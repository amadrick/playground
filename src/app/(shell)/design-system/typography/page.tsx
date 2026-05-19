import { PageHeader } from "../_components/page-header";

interface TypeRow {
  className: string;
  size: string;
  sample: string;
}

const TYPE_SCALE: TypeRow[] = [
  { className: "text-4xl font-semibold tracking-tight", size: "4xl / 36px", sample: "Display Heading" },
  { className: "text-3xl font-semibold tracking-tight", size: "3xl / 30px", sample: "Page Title" },
  { className: "text-2xl font-semibold tracking-tight", size: "2xl / 24px", sample: "Section Heading" },
  { className: "text-xl font-medium", size: "xl / 20px", sample: "Subheading" },
  { className: "text-lg font-medium", size: "lg / 18px", sample: "Lead Paragraph" },
  { className: "text-base", size: "base / 16px", sample: "Body text — sized for comfortable reading at a desk." },
  { className: "text-sm", size: "sm / 14px", sample: "Small body — secondary copy, descriptions, dense UI." },
  { className: "text-xs", size: "xs / 12px", sample: "Caption — metadata, labels, footnotes." },
];

const WEIGHTS = [
  { name: "Regular", className: "font-normal" },
  { name: "Medium", className: "font-medium" },
  { name: "Semibold", className: "font-semibold" },
  { name: "Bold", className: "font-bold" },
];

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Typography"
        description="Inter variable, default Tailwind type scale. Use these utility classes everywhere — no custom font CSS."
      />

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-tight">Scale</h2>
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <ul className="divide-y divide-border">
            {TYPE_SCALE.map((row) => (
              <li
                key={row.className}
                className="grid grid-cols-[120px_1fr] gap-6 px-6 py-5"
              >
                <div className="space-y-0.5 pt-1">
                  <div className="font-mono text-[11px] text-muted-foreground">
                    {row.size}
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground/70">
                    {row.className.split(" ")[0]}
                  </div>
                </div>
                <p className={row.className}>{row.sample}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-tight">Weights</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {WEIGHTS.map((w) => (
            <div
              key={w.name}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  {w.name}
                </span>
                <code className="font-mono text-[11px] text-muted-foreground">
                  {w.className}
                </code>
              </div>
              <p className={`${w.className} text-xl`}>The quick brown fox</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-tight">Mono</h2>
        <div className="rounded-lg border border-border bg-card p-4">
          <pre className="font-mono text-sm text-foreground">
            <code>{`const greeting = "hello, world";`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
