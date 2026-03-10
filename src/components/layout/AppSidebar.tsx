import { useUser, UserButton } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  GraduationCap,
  BookMarked,
  Users,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { KompassLogo } from "@/components/KompassLogo";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/" },
  { icon: FileText, label: "PYQs", to: "/pyq" },
  { icon: BookOpen, label: "Notes", to: "/notes" },
  { icon: GraduationCap, label: "Admission", to: "/admission" },
  { icon: BookMarked, label: "Brochure", to: "/brochure" },
  { icon: Users, label: "Societies", to: "/societies" },
  { icon: MessageCircle, label: "Chatbot", to: "/chatbot" },
];

interface AppSidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function AppSidebar({ mobileOpen, onMobileClose }: AppSidebarProps) {
  const { user } = useUser();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Close mobile drawer on route change
  useEffect(() => {
    if (isMobile && mobileOpen) {
      onMobileClose?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  /* ---------------- MOBILE SIDEBAR ---------------- */
  if (isMobile) {
    return (
      <>
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
            onClick={onMobileClose}
          />
        )}

        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-[260px] flex flex-col bg-card sidebar-shadow border-r border-border transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            <KompassLogo size="sm" showText />
            <button
              onClick={onMobileClose}
              className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-accent"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 flex flex-col gap-1 p-3 pt-4 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-3 transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium font-inter">
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* User + Logout */}
          <div className="mx-3 mb-3 flex flex-col gap-3">
            {user && (
              <div className="p-3 rounded-xl bg-primary-muted border border-primary/20">
                <p className="text-xs font-medium truncate">
                  {user.firstName}
                </p>
                <p className="text-[11px] text-muted-foreground truncate">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            )}
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </aside>
      </>
    );
  }

  /* ---------------- DESKTOP SIDEBAR ---------------- */
  return (
    <aside
      className={cn(
        "relative flex flex-col bg-card sidebar-shadow border-r border-border transition-all duration-300 shrink-0",
        collapsed ? "w-[72px]" : "w-[220px]"
      )}
      style={{ minHeight: "100vh" }}
    >
      {/* Logo */}
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-5 border-b border-border",
          collapsed && "justify-center px-0"
        )}
      >
        <KompassLogo size="sm" showText={!collapsed} />
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-1 p-3 pt-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all group",
                collapsed && "justify-center px-0",
                isActive
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "shrink-0",
                  collapsed ? "w-5 h-5" : "w-[18px] h-[18px]"
                )}
              />
              {!collapsed && (
                <span className="text-sm font-medium font-inter truncate">
                  {item.label}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User + Logout */}
      <div
        className={cn(
          "mx-3 mb-3 flex flex-col gap-3",
          collapsed && "items-center mx-0"
        )}
      >
        {!collapsed && user && (
          <div className="p-3 rounded-xl bg-primary-muted border border-primary/20">
            <p className="text-xs font-medium truncate">
              {user.firstName}
            </p>
            <p className="text-[11px] text-muted-foreground truncate">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        )}
        <UserButton afterSignOutUrl="/sign-in" />
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3.5 top-16 z-10 w-7 h-7 bg-card border border-border rounded-full flex items-center justify-center shadow-card hover:bg-accent"
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5 text-muted-foreground" />
        )}
      </button>
    </aside>
  );
}