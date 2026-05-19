import fs from "fs";
import path from "path";
import { APP_DIR } from "@/config/paths";
import { isExcludedPrototypeRootSegment } from "@/config/route-segments";
import { slugToTitle } from "./utils";
import type { Prototype, PrototypeMetadata } from "@/types";

function hasPageFile(dirPath: string): boolean {
  try {
    const entries = fs.readdirSync(dirPath);
    return entries.some(
      (entry) =>
        entry === "page.tsx" || entry === "page.ts" || entry === "page.jsx",
    );
  } catch {
    return false;
  }
}

function readMetadata(dirPath: string): PrototypeMetadata | null {
  const metaPath = path.join(dirPath, "metadata.json");
  try {
    const raw = fs.readFileSync(metaPath, "utf-8");
    return JSON.parse(raw) as PrototypeMetadata;
  } catch {
    return null;
  }
}

function getCreatedAt(dirPath: string): string | undefined {
  try {
    const stat = fs.statSync(dirPath);
    return stat.birthtime.toISOString();
  } catch {
    return undefined;
  }
}

export function getAllPrototypes(): Prototype[] {
  if (!fs.existsSync(APP_DIR)) return [];

  const entries = fs.readdirSync(APP_DIR);
  const prototypes: Prototype[] = [];

  for (const entry of entries) {
    if (isExcludedPrototypeRootSegment(entry)) continue;

    const entryPath = path.join(APP_DIR, entry);
    let stat: fs.Stats;
    try {
      stat = fs.statSync(entryPath);
    } catch {
      continue;
    }
    if (!stat.isDirectory()) continue;
    if (!hasPageFile(entryPath)) continue;

    const meta = readMetadata(entryPath);
    prototypes.push({
      slug: entry,
      title: meta?.title ?? slugToTitle(entry),
      description: meta?.description,
      tags: meta?.tags,
      createdAt: meta?.createdAt ?? getCreatedAt(entryPath),
    });
  }

  return prototypes.sort((a, b) => {
    const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return db - da;
  });
}
