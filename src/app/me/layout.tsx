import type { Metadata } from "next";
import { ensureStartsWith } from "@/lib/utils";

const { TWITTER_SITE,  } = process.env;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;
const siteUrl = twitterSite + "/me"
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
    <main>
      {children}
    </main>
  );
}
