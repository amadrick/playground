import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ShellSidebar } from "./sidebar-nav";

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="!min-h-0 h-svh max-h-svh overflow-hidden">
      <ShellSidebar />
      <SidebarInset className="min-h-0 overflow-hidden">
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-border px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
