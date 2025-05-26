import type { Metadata } from "next";
import { ensureStartsWith } from "@/lib/utils";
import "../../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";

const { TWITTER_SITE,  } = process.env;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;
const siteUrl = twitterSite + "/me"

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "James Morgan <theHoracle />",
  description: "Portfolio | Resume -- James Morgan <theHoracle />",
  metadataBase: new URL(twitterSite!),
  robots: {
    follow: true,
    index: true
  },
  twitter: {
    
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
    description: 'All about <theHoracle />',
    // Include creator and site if available
    ...(siteUrl && { site: siteUrl })
  },
  openGraph: {
    title: "James Morgan <theHoracle />",
    description: "All about <theHoracle />",
    url: siteUrl,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'James Morgan <theHoracle />'
      }
    ],
  }
};

export default function MeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <body
          className={`${geist.className} ${geistMono.className} antialiased bg-white dark:bg-black relative`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
  );
}
