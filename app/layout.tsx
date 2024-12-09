import type { Metadata } from "next";
import localFont from "next/font/local";
import PrelineScript from "./components/PrelineScript";
import "../globals.css";

const geistSans = localFont({
  src: "./components/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./components/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PlanetPlantPP",
  description: "Ready to Plants",
  icons: {
    shortcut: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
