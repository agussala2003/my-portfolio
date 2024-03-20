import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontInter } from "@/config/fonts";
import { Providers } from "./providers";
import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased bg-[#F9F7F7] dark:bg-[#0d0e0e] transition-all duration-300 ease-in-out",
          fontInter.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navigation />
            <main className="mt-5 bg-[#F9F7F7] dark:bg-[#0d0e0e] transition-all duration-300 ease-in-out">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
