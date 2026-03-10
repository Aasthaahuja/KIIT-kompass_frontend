import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { AppSidebar } from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { KompassLogo } from "@/components/KompassLogo";

export function AppLayout() {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      <div className="flex-1 flex flex-col overflow-auto">
        {/* Mobile top header */}
        {isMobile && (
          <header className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-md border-b border-border">
            <button
              onClick={() => setMobileOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-accent transition-colors"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
            <KompassLogo size="sm" showText />
          </header>
        )}

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
