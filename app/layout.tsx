import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | Sudarshan Rijal`,
  },
  description: siteConfig.description,
  keywords: [
    "Sudarshan Rijal",
    "Computer Engineering",
    "Kathmandu University",
    "Nepal",
    "Software Developer",
    "C++",
    "Qt",
    "AXON HMS",
    "Portfolio",
    "Student Developer",
  ],
  authors: [{ name: "Sudarshan Rijal", url: siteConfig.url }],
  creator: "Sudarshan Rijal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Sudarshan Rijal",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Sudarshan Rijal — Computer Engineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#09090B] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="sr-portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
