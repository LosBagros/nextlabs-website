import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

import "@/app/globals.css";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "NextLabs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col max-w-6xl mx-auto min-h-screen p-6">
          <Navbar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
