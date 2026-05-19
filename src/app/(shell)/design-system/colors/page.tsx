import { PageHeader } from "../_components/page-header";

interface TokenSwatch {
  name: string;
  cssVar: string;
  bgClass: string;
  fgClass?: string;
  description?: string;
}

const SEMANTIC: TokenSwatch[] = [
  {
    name: "Background",
    cssVar: "--background",
    bgClass: "bg-background",
    fgClass: "text-foreground",
    description: "Page background",
  },
  {
    name: "Foreground",
    cssVar: "--foreground",
    bgClass: "bg-foreground",
    fgClass: "text-background",
    description: "Primary text",
  },
  {
    name: "Card",
    cssVar: "--card",
    bgClass: "bg-card",
    fgClass: "text-card-foreground",
    description: "Surface for cards & panels",
  },
  {
    name: "Popover",
    cssVar: "--popover",
    bgClass: "bg-popover",
    fgClass: "text-popover-foreground",
    description: "Floating surfaces",
  },
  {
    name: "Primary",
    cssVar: "--primary",
    bgClass: "bg-primary",
    fgClass: "text-primary-foreground",
    description: "Primary actions",
  },
  {
    name: "Secondary",
    cssVar: "--secondary",
    bgClass: "bg-secondary",
    fgClass: "text-secondary-foreground",
    description: "Secondary actions",
  },
  {
    name: "Muted",
    cssVar: "--muted",
    bgClass: "bg-muted",
    fgClass: "text-muted-foreground",
    description: "Quiet surfaces / secondary text",
  },
  {
    name: "Accent",
    cssVar: "--accent",
    bgClass: "bg-accent",
    fgClass: "text-accent-foreground",
    description: "Hover / accent states",
  },
  {
    name: "Destructive",
    cssVar: "--destructive",
    bgClass: "bg-destructive",
    fgClass: "text-white",
    description: "Errors, destructive actions",
  },
];

const LINES: TokenSwatch[] = [
  { name: "Border", cssVar: "--border", bgClass: "bg-border" },
  { name: "Input", cssVar: "--input", bgClass: "bg-input" },
  { name: "Ring", cssVar: "--ring", bgClass: "bg-ring" },
];

const CHART: TokenSwatch[] = [
  { name: "Chart 1", cssVar: "--chart-1", bgClass: "bg-chart-1" },
  { name: "Chart 2", cssVar: "--chart-2", bgClass: "bg-chart-2" },
  { name: "Chart 3", cssVar: "--chart-3", bgClass: "bg-chart-3" },
  { name: "Chart 4", cssVar: "--chart-4", bgClass: "bg-chart-4" },
  { name: "Chart 5", cssVar: "--chart-5", bgClass: "bg-chart-5" },
];

const SIDEBAR: TokenSwatch[] = [
  {
    name: "Sidebar",
    cssVar: "--sidebar",
    bgClass: "bg-sidebar",
    fgClass: "text-sidebar-foreground",
  },
  {
    name: "Sidebar Primary",
    cssVar: "--sidebar-primary",
    bgClass: "bg-sidebar-primary",
    fgClass: "text-sidebar-primary-foreground",
  },
  {
    name: "Sidebar Accent",
    cssVar: "--sidebar-accent",
    bgClass: "bg-sidebar-accent",
    fgClass: "text-sidebar-accent-foreground",
  },
];

function SwatchCard({ token }: { token: TokenSwatch }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className={`flex h-20 items-center justify-center ${token.bgClass} ${token.fgClass ?? ""}`}
      >
        {token.fgClass && <span className="text-xs font-medium">Aa</span>}
      </div>
      <div className="space-y-0.5 border-t border-border bg-card p-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium">{token.name}</span>
          <code className="font-mono text-[10px] text-muted-foreground">
            {token.cssVar}
          </code>
        </div>
        {token.description && (
          <p className="text-[11px] leading-snug text-muted-foreground">
            {token.description}
          </p>
        )}
      </div>
    </div>
  );
}

function SwatchGroup({
  label,
  tokens,
}: {
  label: string;
  tokens: TokenSwatch[];
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold tracking-tight">{label}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tokens.map((t) => (
          <SwatchCard key={t.cssVar} token={t} />
        ))}
      </div>
    </section>
  );
}

export default function ColorsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Colors"
        description="Stock shadcn tokens — bound to CSS variables that flip on .dark. Use the semantic class (e.g. bg-primary, text-muted-foreground) rather than literal colors."
      />

      <SwatchGroup label="Semantic" tokens={SEMANTIC} />
      <SwatchGroup label="Lines & Inputs" tokens={LINES} />
      <SwatchGroup label="Sidebar" tokens={SIDEBAR} />
      <SwatchGroup label="Chart" tokens={CHART} />
    </div>
  );
}
