"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PrototypeTable } from "@/components/prototype-table";
import { CreatePrototypeDialog } from "@/components/create-prototype-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Prototype } from "@/types";

interface Props {
  prototypes: Prototype[];
  canCreate: boolean;
}

export function HomeContent({ prototypes, canCreate }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-2xl px-8 py-10">
      <div className="mb-6 flex flex-col items-start gap-4">
        <div className="flex w-full items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-tight">
              Prototypes
            </h1>
            <p className="text-sm text-muted-foreground">
              A lightweight playground for design-to-code experiments.
            </p>
          </div>
          {canCreate && (
            <Button size="sm" onClick={() => setCreateOpen(true)}>
              <Plus className="size-4" />
              New
            </Button>
          )}
        </div>
        <div className="w-full">
          <Input
            placeholder="Search prototypes…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <PrototypeTable
        prototypes={prototypes}
        searchQuery={searchQuery}
        canCreate={canCreate}
        onCreate={() => setCreateOpen(true)}
        filterDate={filterDate}
        onFilterDate={setFilterDate}
      />

      {canCreate && (
        <CreatePrototypeDialog open={createOpen} onOpenChange={setCreateOpen} />
      )}
    </div>
  );
}
