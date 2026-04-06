import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Carbon Yachts | Ahead. By Design.",
  description:
    "Europe's most progressive marine brands. Exclusive Australian and New Zealand dealer for Saffier Yachts, Y.Yachts, Virtue Yachts, Candela, Shogun Yachts, Santasevera and more.",
  keywords: [
    "Carbon Yachts",
    "luxury yachts Australia",
    "sailing yachts",
    "motor yachts",
    "Saffier Yachts",
    "Y.Yachts",
    "Virtue Yachts",
    "Candela",
    "Shogun Yachts",
  ],
  openGraph: {
    title: "Carbon Yachts | Ahead. By Design.",
    description:
      "Europe's most progressive marine brands. Chosen for Australia and New Zealand.",
    url: "https://carbonyachts.com.au",
    siteName: "Carbon Yachts",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
