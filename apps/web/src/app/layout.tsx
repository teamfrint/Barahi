import type { Metadata } from "next";
import { Playfair_Display_SC, Karla } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../config/siteConfig";
import { ClientProviders } from "../components/ClientProviders";

const headingFont = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const bodyFont = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.sections.hero.subtitle.en,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --primary: ${siteConfig.theme.primary};
            --secondary: ${siteConfig.theme.secondary};
            --cta: ${siteConfig.theme.cta};
          }
        `}} />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased text-slate-800 bg-slate-50`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
