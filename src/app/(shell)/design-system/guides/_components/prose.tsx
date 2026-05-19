import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/**
 * Tasteful prose styles for guide pages.
 * Uses semantic shadcn tokens so dark mode works for free.
 */
export function Prose({ children }: Props) {
  return (
    <div
      className={[
        "space-y-4 text-sm leading-relaxed text-foreground",
        "[&_h2]:mt-10 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
        "[&_h3]:mt-6 [&_h3]:mb-1 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground",
        "[&_p]:text-sm [&_p]:text-muted-foreground",
        "[&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:text-sm [&_ul]:text-muted-foreground",
        "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:text-sm [&_ol]:text-muted-foreground",
        "[&_li>code]:text-foreground",
        "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px] [&_code]:text-foreground",
        "[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-card [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-xs [&_pre]:leading-relaxed",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-muted-foreground [&_pre_code]:text-xs",
        "[&_hr]:my-8 [&_hr]:border-border",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground [&_blockquote]:italic",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
