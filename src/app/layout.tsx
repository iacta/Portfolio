import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

import openGraphImage from '../../public/icon.png';

export const metadata: Metadata = {
  title: "Portfólio",
  description:"Bem-vindo ao meu portfólio! Aqui, você encontrará uma coleção de projetos e soluções criadas com dedicação e expertise. Como desenvolvedor Fullstack, uso tecnologias modernas para construir experiências digitais únicas e eficientes. Navegue pelo meu trabalho e descubra como posso transformar suas ideias em realidade com soluções web inovadoras.",
  openGraph: {
    images: [
      {
        url: openGraphImage.src,  
        width: 800,
        height: 600,
        alt: 'Portfólio',
      },
    ],
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
