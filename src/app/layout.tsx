import type { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hanami — Boutique sakura, douceur & bonne humeur",
  description:
    "Hanami, la boutique qui fait fleurir votre quotidien : thés, papeterie, bijoux et bougies inspirés des cerisiers en fleurs japonais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
