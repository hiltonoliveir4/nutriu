import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import NavigationMenu from "@/components/ui/NavigationMenu";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutriu",
  description: "Aplicação para controle de macros nutricionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
