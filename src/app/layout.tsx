import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

import ClientSetup from "@/components/clientSetup";

// export const metadata: Metadata = {
//   metadataBase: new URL(
//     process.env.APP_URL
//       ? `${process.env.APP_URL}`
//       : process.env.VERCEL_URL
//       ? `https://${process.env.VERCEL_URL}`
//       : `http://localhost:${process.env.PORT || 3000}`
//   ),
//   title: "Plumbreed Puzzles",
//   description:
//     "Discover the richness of Biblical stories through engaging and faith-based puzzles and games. Bringing Scripture to life for families and individuals worldwide.",
//   alternates: {
//     canonical: "/"
//   },
//   openGraph: {
//     url: "/",
//     title: "Plumbreed Puzzles",
//     description:
//       "Discover the richness of Biblical stories through engaging and faith-based puzzles and games. Bringing Scripture to life for families and individuals worldwide.",
//     type: "website",
//     images: {
//       url: "https://res.cloudinary.com/dvuvrb47d/image/upload/q_auto/f_auto/w_1200/v1725344577/plumbreespuzzle_b1on2q.png",
//       alt: "Biblical Puzzles"
//     }
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Plumbreed Puzzles",
//     images: {
//       url: "https://res.cloudinary.com/dvuvrb47d/image/upload/q_auto/f_auto/w_1200/v1725344577/plumbreespuzzle_b1on2q.png",
//       alt: "Biblical Puzzles"
//     },
//     description:
//       "Discover the richness of Biblical stories through engaging and faith-based puzzles and games. Bringing Scripture to life for families and individuals worldwide."
//   }
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#18181b" />
        
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className={GeistSans.className}>
        <ClientSetup>{children}</ClientSetup>

        <Toaster />
      </body>
    </html>
  );
}
