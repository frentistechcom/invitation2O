"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-border/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-white font-serif font-bold text-lg group-hover:scale-105 transition-transform">
            IC
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight text-foreground leading-tight">
              Invitation<span className="text-amber-500">CardMaker</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-medium">
              Luxury Indian Card Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <Link href="/templates" className="hover:text-amber-500 transition-colors">
            All Collections
          </Link>
          <Link href="/templates/wedding" className="hover:text-amber-500 transition-colors">
            Wedding &amp; Reception
          </Link>
          <Link href="/templates/birthday" className="hover:text-amber-500 transition-colors">
            Birthday
          </Link>
          <Link href="/templates/baby-shower" className="hover:text-amber-500 transition-colors">
            Baby Shower
          </Link>
          <Link href="/templates/housewarming" className="hover:text-amber-500 transition-colors">
            Griha Pravesh
          </Link>
        </nav>

        {/* Right Actions: Theme Toggle & Studio CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/editor?template=royal-traditional-wedding"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-foreground hover:bg-secondary border border-border"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-card/98 px-5 pt-3 pb-6 flex flex-col gap-2.5 animate-in slide-in-from-top-2 duration-150">
          <Link
            href="/templates"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-secondary"
          >
            All Collections
          </Link>
          <Link
            href="/templates/wedding"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-secondary"
          >
            Wedding &amp; Reception Cards
          </Link>
          <Link
            href="/templates/birthday"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-secondary"
          >
            Birthday Celebrations
          </Link>
          <Link
            href="/templates/baby-shower"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-secondary"
          >
            Godh Bharai &amp; Baby Shower
          </Link>
          <Link
            href="/templates/housewarming"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-secondary"
          >
            Griha Pravesh &amp; Vastu Pooja
          </Link>
          <Link
            href="/editor?template=royal-traditional-wedding"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-semibold text-sm rounded-xl shadow-md"
          >
            Open Card Studio
          </Link>
        </div>
      )}
    </header>
  );
};
