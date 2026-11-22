"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-border bg-card/50 ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Toggle Light / Dark Mode"
      className={`relative w-9 h-9 rounded-xl border border-border bg-card/80 hover:bg-accent/20 text-foreground flex items-center justify-center transition-all shadow-sm active:scale-95 ${className}`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-amber-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
