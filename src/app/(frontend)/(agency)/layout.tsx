import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ensureStartsWith } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Geist, Geist_Mono } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
})



const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata: Metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  description: "Design. Develop. Deliver. Everything Your Brand Needs to Grow.",
  metadataBase: new URL(twitterSite!),
  robots: {
    follow: true,
    index: true
  },
  twitter: {
    title: SITE_NAME!,
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
    description: 'All about <theHoracle />',
    // Include creator and site if available
    ...(twitterCreator && { creator: twitterCreator }),
    ...(twitterSite && { site: twitterSite })
  },
  openGraph: {
    title: SITE_NAME!,
    description: "All about <theHoracle />",
    url: twitterSite,
    siteName: SITE_NAME!,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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