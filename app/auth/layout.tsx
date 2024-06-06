import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextLabs",
};
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={
          "!bg-fixed !bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" +
          inter.className
        }
      >
        <div className="flex flex-col items-center justify-center h-full">
          {children}
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
