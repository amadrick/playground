"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Copy code"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}

export function DemoSection({ title, description, code, children }: Props) {
  return (
    <section className="space-y-3">
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="flex min-h-[140px] items-center justify-center bg-muted/30 p-6">
          {children}
        </div>
        {code && (
          <div className="relative border-t border-border bg-card">
            <pre className="overflow-x-auto p-4 pr-12 font-mono text-xs leading-relaxed text-muted-foreground">
              <code>{code}</code>
            </pre>
            <CopyButton text={code} />
          </div>
        )}
      </div>
    </section>
  );
}
