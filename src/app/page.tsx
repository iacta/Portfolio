"use client";

import NavBar from "./components/navbar";
import Image from "next/image";
import Program from "@/../public/programming.svg";
import { Button } from "@/components/ui/button"
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <header>
        <NavBar />
      </header>
      <div className="flex flex-col mt-10 px-36">
        <div className="flex flex-row items-start space-x-8">
          <div className="flex-1">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Thiago Vitor</h1>
              <h2 className="text-4xl font-bold -mt-3 mb-4">seu guia para o próximo nível</h2>
              <p className="text-2xl leading-relaxed text-gray-400 font-semibold">
                Estamos aqui para ajudar você a transformar suas ideias em realidade e levar seus projetos ao próximo nível.
              </p>
              <div className="mt-6">
                <Button className="bg-azure-800 text-white" asChild>
                  <Link href="https://w.app/JDTdlH" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo size={54} weight="bold" />
                    Vamos Conversar?
                  </Link>
                </Button>

              </div>
              <div>
                <h1 className="text-xl font-bold mt-32 mb-4 text-gray-400">Linguagens e Tecnologias Utilizadas</h1>
                <div className="flex flex-row space-x-6">
                  <div>
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                      <Image src="/js.png" width={52} height={50} alt="JS picture" />
                      <p className="text-xs text-gray-400 font-semibold mt-5 text-center">JavaScript</p>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                      <Image src="/ts.png" width={52} height={50} alt="TS picture" />
                      <p className="text-xs text-gray-400 font-semibold mt-5 text-center">TypeScript</p>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      <Image src="/react.png" width={52} height={50} alt="React picture" />
                      <p className="text-xs text-gray-400 font-semibold mt-5 text-center">React JS</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex-shrink-0">
            <Program width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
}
