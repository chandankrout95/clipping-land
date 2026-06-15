import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FlexNScale | We Scale Your Business With Clipping",
  description:
    "Launch one campaign and instantly activate thousands of clippers posting your content across multiple platforms to generate millions of views.",
  keywords: [
    "FlexNScale",
    "clipping",
    "content scaling",
    "short form video",
    "shorts",
    "tiktok",
    "reels",
  ],
  authors: [{ name: "FlexNScale Team" }],
  openGraph: {
    title: "FlexNScale | We Scale Your Business With Clipping",
    description:
      "Scale your reach with thousands of clippers posting your content.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 flex flex-col w-full relative z-[1]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
