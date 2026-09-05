import type { Metadata } from "next";
import { Spectral, Manrope, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const display = Spectral({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});
const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "[Nom du mod] — Wiki",
  description: "Documentation communautaire du mod pour Genshin Impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 px-6 py-10 md:px-14 md:py-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
