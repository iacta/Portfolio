import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { openGraphImage } from '../../public/icon.png';

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Um simples portfólio",
  openGraph: {
    ...openGraphImage,
    title: 'Portfólio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body
        className={`${montserrat.className} antialiased bg-azure-950`}
      >
        {children}
      </body>
    </html>
  );
}
