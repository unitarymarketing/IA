import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unitary Marketing IA",
  description: "Innovación Sin Límites - Escalamos tu Pyme con IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased overflow-x-hidden selection:bg-brand-cyan/30`}>
        {children}
      </body>
    </html>
  );
}
