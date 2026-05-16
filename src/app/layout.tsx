import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NZ Travels & Tours | Premium International Travel Agency",
  description: "Discover breathtaking landscapes and luxury tours across top global destinations including New Zealand, Maldives, Dubai, Europe, and Umrah packages. Expertly crafted itineraries for adventure, culture, and relaxation.",
  keywords: ["international tours", "travel agency Pakistan", "best vacation packages", "Umrah tours", "Maldives trips", "Europe tours", "New Zealand travel packages", "luxury travel agency", "custom holiday itineraries"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
