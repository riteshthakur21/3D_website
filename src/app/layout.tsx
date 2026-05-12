import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "@/app/globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-heading"
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Premium 3D Developer Portfolio",
  description: "Production-grade, cinematic developer portfolio built with Next.js, TypeScript, and Three.js."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-background text-text antialiased`}>{children}</body>
    </html>
  );
}
