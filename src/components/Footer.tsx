import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border text-muted-foreground text-xs py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Bio */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-white font-serif font-bold text-sm shadow-md">
              IC
            </div>
            <span className="font-serif font-bold text-base text-foreground">
              Invitation<span className="text-amber-500">CardMaker</span>.in
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            India&apos;s leading high-resolution online invitation maker. Create and download wedding, birthday, and
            traditional ceremony cards in 2 minutes with print-ready 300 DPI clarity and Google Maps QR codes.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">Collections</h4>
          <Link href="/templates/wedding" className="hover:text-amber-500 transition-colors">
            Indian Wedding Cards
          </Link>
          <Link href="/templates/wedding" className="hover:text-amber-500 transition-colors">
            Haldi &amp; Sangeet Cards
          </Link>
          <Link href="/templates/birthday" className="hover:text-amber-500 transition-colors">
            Birthday Invitations
          </Link>
          <Link href="/templates/baby-shower" className="hover:text-amber-500 transition-colors">
            Godh Bharai / Baby Shower
          </Link>
          <Link href="/templates/housewarming" className="hover:text-amber-500 transition-colors">
            Griha Pravesh &amp; Vastu
          </Link>
          <Link href="/templates/naming-ceremony" className="hover:text-amber-500 transition-colors">
            Namkaran Ceremony
          </Link>
        </div>

        {/* Studio Features */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">Studio Features</h4>
          <span>300 DPI Vector-Quality Canvas</span>
          <span>Google Maps QR Code Generator</span>
          <span>Indian Regional Fonts (Hindi, Gujarati, Tamil, etc.)</span>
          <span>Sacred Cultural Motifs (Ganesha, Kalash, Om)</span>
          <span>Instant WhatsApp &amp; PDF Download</span>
        </div>

        {/* Legal & Help */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">Legal &amp; Help</h4>
          <Link href="/about" className="hover:text-amber-500 transition-colors">
            About Us
          </Link>
          <Link href="/privacy" className="hover:text-amber-500 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-amber-500 transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-amber-500 transition-colors">
            Contact Support
          </Link>
          <span className="text-muted-foreground mt-2">support@invitationcardmaker.in</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground gap-2">
        <p>© {new Date().getFullYear()} InvitationCardMaker.in. All rights reserved.</p>
        <p>Built with Next.js 15, Tailwind CSS &amp; High-DPI Vector Engine.</p>
      </div>
    </footer>
  );
};
