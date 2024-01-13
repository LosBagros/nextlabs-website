import type { Metadata } from "next";
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
    <div className="max-w-6xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
