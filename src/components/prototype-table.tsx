"use client";

import Link from "next/link";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { shortDate } from "@/lib/utils";
import type { Prototype } from "@/types";

interface Props {
  prototypes: Prototype[];
  searchQuery: string;
  canCreate: boolean;
  onCreate?: () => void;
  filterDate: string | null;
  onFilterDate: (date: string | null) => void;
}

export function PrototypeTable({
  prototypes,
  searchQuery,
  canCreate,
  onCreate,
  filterDate,
  onFilterDate,
}: Props) {
  const filtered = prototypes.filter((proto) => {
    if (filterDate && shortDate(proto.createdAt) !== filterDate) return false;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      proto.title.toLowerCase().includes(q) ||
      proto.slug.toLowerCase().includes(q) ||
      (proto.description?.toLowerCase().includes(q) ?? false) ||
      (proto.tags?.some((tag) => tag.toLowerCase().includes(q)) ?? false)
    );
  });

  if (prototypes.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border p-10 text-center">
        <p className="text-sm text-muted-foreground">
          No prototypes yet. {canCreate ? "Click " : "Add a folder under "}
          {canCreate ? (
            <button
              type="button"
              onClick={onCreate}
              className="underline underline-offset-2"
            >
              + New prototype
            </button>
          ) : (
            <code className="font-mono">src/app/&lt;slug&gt;/page.tsx</code>
          )}{" "}
          to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filterDate && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onFilterDate(null)}
            className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted/70"
          >
            {filterDate}
            <X className="size-3" />
          </button>
        </div>
      )}

      <ul className="divide-y divide-border rounded-lg border border-border bg-card">
        {filtered.map((proto) => {
          const dateLabel = shortDate(proto.createdAt);
          return (
            <li key={proto.slug}>
              <div className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/40">
                <Link
                  href={`/${proto.slug}`}
                  className="min-w-0 flex-1 truncate text-sm font-medium text-foreground hover:underline"
                >
                  {proto.title}
                </Link>
                <div className="hidden min-w-0 flex-1 truncate text-xs text-muted-foreground sm:block">
                  {proto.description}
                </div>
                {proto.tags && proto.tags.length > 0 && (
                  <div className="hidden gap-1 sm:flex">
                    {proto.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                {dateLabel && (
                  <button
                    type="button"
                    onClick={() =>
                      onFilterDate(filterDate === dateLabel ? null : dateLabel)
                    }
                    className="shrink-0 rounded-full px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {dateLabel}
                  </button>
                )}
              </div>
            </li>
          );
        })}

        {canCreate && onCreate && (
          <li>
            <button
              type="button"
              onClick={onCreate}
              className="flex w-full items-center gap-2 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
            >
              <Plus className="size-4" />
              New prototype
            </button>
          </li>
        )}

        {filtered.length === 0 && (
          <li className="px-4 py-6 text-center text-sm text-muted-foreground">
            No prototypes match your search.
          </li>
        )}
      </ul>
    </div>
  );
}
