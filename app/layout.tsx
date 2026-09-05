import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kuro — Wiki",
  description: "Community documentation for the Genshin Impact mod.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mono.variable} font-body`}>
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
