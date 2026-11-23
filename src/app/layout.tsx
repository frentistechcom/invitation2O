import type { Metadata } from "next";
import { GOOGLE_FONTS_STYLESHEET } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvitationCardMaker.in - Free Online Indian Invitation Card Maker & Templates",
  description:
    "Design high-resolution Indian wedding invitation cards, birthday cards, baby shower, and housewarming invitations online. Add Google Maps QR codes, traditional calligraphy fonts, and download print-ready 300 DPI cards instantly.",
  keywords: [
    "Invitation Card Maker",
    "Indian Wedding Card Maker Online",
    "Free Hindu Wedding Invitation Template",
    "Online Invitation Editor",
    "Baby Shower Card Maker",
    "Griha Pravesh Invitation",
    "Namkaran Ceremony Card",
    "WhatsApp Wedding Invitation",
    "Google Maps QR Invitation",
  ],
  authors: [{ name: "InvitationCardMaker.in" }],
  creator: "InvitationCardMaker.in",
  publisher: "InvitationCardMaker.in",
  metadataBase: new URL("https://invitationcardmaker.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "InvitationCardMaker.in - Create Beautiful Indian Invitations in 2 Minutes",
    description:
      "Thousands of customizable Indian wedding, birthday, and celebration invitation templates. High-DPI 300 DPI export, Google Maps QR code, and regional fonts.",
    url: "https://invitationcardmaker.in",
    siteName: "InvitationCardMaker.in",
    images: [
      {
        url: "/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "InvitationCardMaker Online Editor",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvitationCardMaker.in - Online Indian Invitation Card Maker",
    description: "Customize & download print-ready Indian invitations in seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://invitationcardmaker.in/#website",
        url: "https://invitationcardmaker.in",
        name: "InvitationCardMaker.in",
        description: "Free Online Indian Invitation Card Maker & High-Resolution Templates",
        publisher: {
          "@type": "Organization",
          name: "InvitationCardMaker",
          url: "https://invitationcardmaker.in",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "InvitationCardMaker Web Studio",
        operatingSystem: "All (Web, iOS, Android, macOS, Windows)",
        applicationCategory: "DesignApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        featureList: [
          "High-DPI 300 DPI print-ready rendering",
          "Google Maps QR Code venue locator",
          "Indian regional fonts (Devanagari, Gujarati, Tamil, Telugu)",
          "Traditional cultural motifs (Ganesha, Kalash, Om, Swastik)",
          "Instant WhatsApp and PDF export",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_STYLESHEET} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
