import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextLabs",
};

// bg gradient: https://hypercolor.dev/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Platforma pro Výuku!" />
        <meta name="author" content="Bagros" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tagy */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nextlabs.cz" />
        <meta property="og:title" content="NextLabs" />
        <meta property="og:description" content="Platforma pro Výuku!" />
      </head>
      <body
        className={
          "!bg-fixed !bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" +
          inter.className
        }
      >
        {children}
      </body>
    </html>
  );
}
