"use client";

import NavBar from "../components/navbar";
import AboutImage from "@/../public/about.svg";

export default function About() {
    return (
        <main className="min-h-screen p-6">
            <header>
                <NavBar />
            </header>
            <div className="flex flex-col mt-10 px-6 sm:px-16 lg:px-36">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Texto à esquerda */}
                    <div className="flex-1">
                        <div className="max-w-2xl mx-auto lg:mx-0">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">Minha História</h1>
                            <p className="text-lg sm:text-2xl leading-relaxed text-gray-400 font-semibold text-center lg:text-left">
                                Acompanhe minha jornada no desenvolvimento de soluções inovadoras, desde os primeiros passos até as mais recentes conquistas.
                            </p>
                            <div className="mt-6">
                                <p className="text-base sm:text-xl leading-relaxed text-gray-300 font-medium">
                                    Em <span className="font-bold">2021</span>, quando dei meus primeiros passos no mundo da programação, nunca imaginei o impacto que isso teria na minha trajetória. Comecei desenvolvendo servidores para jogos online e, a cada desafio superado, minha curiosidade e paixão pela tecnologia só aumentavam. Foi então que percebi algo crucial: para continuar crescendo, eu precisava ir além. Entre <span className="font-bold">2022 e 2023</span>, tomei a decisão de dar um salto significativo, mergulhando no vasto universo da <span className="font-bold">programação web</span>. Esse foi o momento decisivo em que, finalmente, comecei a construir o futuro que sempre sonhei, buscando conhecimento profundo e desafiando meus próprios limites a cada novo aprendizado.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Imagem à direita */}
                    <div className="flex-shrink-0 w-full max-w-xs lg:max-w-none lg:w-[500px]">
                        <AboutImage className="mx-auto lg:mx-0" width={400} height={400} />
                    </div>
                </div>
            </div>
        </main>
    );
}
