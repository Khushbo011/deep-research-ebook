import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CartProvider } from "@/lib/CartContext";
import { CartDrawer } from "@/components/ui/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Research: Autonomous Robots & Smart Systems | Premium Report",
  description: "The Definitive Research Guide to Autonomous Robots & Smart Systems. Explore the technologies, architectures, market trends, and innovations shaping the future of intelligent automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased bg-obsidian text-ivory scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

