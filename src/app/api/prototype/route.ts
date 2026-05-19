import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { APP_DIR } from "@/config/paths";
import {
  SLUG_MAX_LENGTH,
  SLUG_PATTERN,
  isReservedSlug,
} from "@/config/route-segments";
import { slugify } from "@/lib/utils";

interface CreateBody {
  title?: unknown;
  slug?: unknown;
}

function devOnlyGuard(): NextResponse | null {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { ok: false, error: "Prototype creation is only available in development." },
      { status: 403 },
    );
  }
  return null;
}

export async function POST(request: Request) {
  const guard = devOnlyGuard();
  if (guard) return guard;

  let body: CreateBody;
  try {
    body = (await request.json()) as CreateBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const rawTitle = typeof body.title === "string" ? body.title.trim() : "";
  if (!rawTitle) {
    return NextResponse.json(
      { ok: false, error: "Title is required." },
      { status: 400 },
    );
  }

  const requestedSlug =
    typeof body.slug === "string" && body.slug.trim()
      ? slugify(body.slug)
      : slugify(rawTitle);

  if (!requestedSlug) {
    return NextResponse.json(
      { ok: false, error: "Could not derive a slug from that title." },
      { status: 400 },
    );
  }
  if (requestedSlug.length > SLUG_MAX_LENGTH) {
    return NextResponse.json(
      {
        ok: false,
        error: `Slug must be ${SLUG_MAX_LENGTH} characters or fewer.`,
      },
      { status: 400 },
    );
  }
  if (!SLUG_PATTERN.test(requestedSlug)) {
    return NextResponse.json(
      { ok: false, error: "Slug must be lowercase letters, numbers, and hyphens." },
      { status: 400 },
    );
  }
  if (isReservedSlug(requestedSlug)) {
    return NextResponse.json(
      { ok: false, error: "That slug is reserved." },
      { status: 400 },
    );
  }

  const targetDir = path.join(APP_DIR, requestedSlug);
  if (fs.existsSync(targetDir)) {
    return NextResponse.json(
      { ok: false, error: "A prototype with that slug already exists." },
      { status: 409 },
    );
  }

  try {
    fs.mkdirSync(targetDir, { recursive: true });

    const pagePath = path.join(targetDir, "page.tsx");
    fs.writeFileSync(pagePath, buildPageSource(rawTitle), "utf-8");

    const metaPath = path.join(targetDir, "metadata.json");
    const metadata = {
      title: rawTitle,
      description: "",
      tags: [] as string[],
      createdAt: new Date().toISOString(),
    };
    fs.writeFileSync(metaPath, JSON.stringify(metadata, null, 2) + "\n", "utf-8");

    return NextResponse.json({ ok: true, slug: requestedSlug });
  } catch (error) {
    console.error("Failed to create prototype", error);
    try {
      fs.rmSync(targetDir, { recursive: true, force: true });
    } catch {}
    return NextResponse.json(
      { ok: false, error: "Could not write prototype files." },
      { status: 500 },
    );
  }
}

function buildPageSource(title: string): string {
  const safe = title.replace(/`/g, "\\`");
  return `import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4 rounded-lg border border-border bg-card p-6 text-card-foreground">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold tracking-tight">${safe}</h1>
            <Badge variant="secondary">New</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Edit <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">src/app/${slugForCodeComment(title)}/page.tsx</code> to start building.
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="secondary">Secondary</Button>
        </div>
      </div>
    </div>
  );
}
`;
}

function slugForCodeComment(title: string): string {
  return slugify(title) || "your-prototype";
}
