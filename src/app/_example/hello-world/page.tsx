import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HelloWorldPage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4 rounded-lg border border-border bg-card p-6 text-card-foreground">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold tracking-tight">
              Hello World
            </h1>
            <Badge variant="secondary">Example</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            This is a starter prototype. Copy this folder to create your own.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          To create a new prototype, add a folder at{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            src/app/&lt;slug&gt;/page.tsx
          </code>
        </p>
        <div className="flex gap-2">
          <Button size="sm">Primary Action</Button>
          <Button size="sm" variant="secondary">
            Secondary
          </Button>
        </div>
      </div>
    </div>
  );
}
