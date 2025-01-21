import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Um simples portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${montserrat.className} antialiased bg-azure-950`}
      >
        {children}
      </body>
    </html>
  );
}
