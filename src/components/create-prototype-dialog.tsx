"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { slugify } from "@/lib/utils";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreatePrototypeDialog({ open, onOpenChange }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      setTitle("");
      setError("");
      setSubmitting(false);
    }
  }, [open]);

  const slug = slugify(title);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!slug) {
      setError("Title must contain at least one letter or number.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/prototype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.trim(), slug }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        slug?: string;
        error?: string;
      };
      if (!res.ok || !data.ok || !data.slug) {
        setError(data.error ?? "Could not create prototype.");
        setSubmitting(false);
        return;
      }
      onOpenChange(false);
      router.push(`/${data.slug}`);
      router.refresh();
    } catch {
      setError("Network error. Try again.");
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New prototype</DialogTitle>
          <DialogDescription>
            Scaffolds a new folder at{" "}
            <code className="font-mono text-xs">src/app/{slug || "<slug>"}</code>
            .
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-prototype-title">Title</Label>
            <Input
              id="new-prototype-title"
              value={title}
              autoFocus
              placeholder="My next prototype"
              onChange={(e) => {
                setTitle(e.target.value);
                setError("");
              }}
              required
            />
            {slug && (
              <p className="text-xs text-muted-foreground">
                URL:{" "}
                <span className="font-mono">/{slug}</span>
              </p>
            )}
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting || !title.trim()}>
              {submitting ? "Creating\u2026" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
