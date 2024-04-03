import type { Metadata } from "next";

import "@mantine/core/styles.css";
import "@/app/globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <div className="max-w-6xl p-4 mx-auto">
            <Navbar />
            {children}
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
