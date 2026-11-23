"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sparkles, Menu, X, ArrowRight, Heart, Cake, Baby, Home, Bell } from "lucide-react";

const NAV_ITEMS = [
  { name: "All Templates", href: "/templates", exact: true },
  { name: "Wedding", href: "/templates/wedding", icon: Heart },
  { name: "Birthday", href: "/templates/birthday", icon: Cake },
  { name: "Baby Shower", href: "/templates/baby-shower", icon: Baby },
  { name: "Griha Pravesh", href: "/templates/housewarming", icon: Home },
  { name: "Naming Ceremony", href: "/templates/naming-ceremony", icon: Bell },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-xl border-b border-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 text-white font-serif font-bold text-base group-hover:scale-105 transition-transform">
            IC
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-foreground leading-none">
              Invitation<span className="text-amber-500">CardMaker</span>
            </span>
            <span className="text-[9px] text-muted-foreground tracking-widest uppercase font-medium mt-0.5 hidden xs:inline">
              Indian Card Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                  active
                    ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Studio CTA */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Link
            href="/templates"
            className="flex items-center gap-1.5 px-3.5 xl:px-4 py-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-xs rounded-xl shadow-md shadow-orange-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Studio</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-xl text-foreground hover:bg-secondary border border-border"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-card/98 px-4 pt-3 pb-5 flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-150 shadow-xl">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(item.href, item.exact);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {Icon && <Icon className="w-4 h-4 text-amber-500" />}
                <span>{item.name}</span>
              </Link>
            );
          })}
          <Link
            href="/templates"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-semibold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Card Studio</span>
          </Link>
        </div>
      )}
    </header>
  );
};
