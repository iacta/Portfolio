"use client";

import NavBar from "../components/navbar";
import Image from "next/image";
import Rocket from "@/../public/rocket.svg";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default function Projects() {
    return (
        <main className="min-h-screen p-6">
            <header>
                <NavBar />
            </header>
            <div className="flex flex-col mt-10 px-6 sm:px-16 lg:px-36">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Coluna da descrição */}
                    <div className="flex-1">
                        <div className="max-w-2xl mx-auto lg:mx-0">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">Meus Projetos</h1>
                            <p className="text-lg sm:text-2xl leading-relaxed text-gray-400 font-semibold text-center lg:text-left">
                                Projetos feitos por mim
                            </p>
                            <div className="mt-6 space-y-5">
                                {/* Cartão 1 */}
                                <Card className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 bg-azure-950 p-4">
                                    <Image
                                        src="/projects/square.jpg"
                                        alt="Avatar"
                                        width={150}
                                        height={150}
                                        className="rounded-md object-cover flex-shrink-0"
                                    />
                                    <div className="mt-4 lg:mt-0 lg:flex-1 text-center lg:text-left">
                                        <CardHeader>
                                            <CardTitle className="text-xl sm:text-2xl lg:text-4xl">Square Cloud Mobile</CardTitle>
                                            <CardDescription className="text-sm sm:text-lg">
                                                Um simples App Mobile Dashboard para controlar seus aplicativos na rede de Hospedagens SquareCloud
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="flex justify-center lg:justify-end items-center space-x-4 mt-4">
                                            <Link href="https://flutter.dev" target="_blank" rel="noopener noreferrer">
                                                <Image src="/projects/flutter.png" alt="FLUTTER PICTURE" width={50} height={50} />
                                            </Link>
                                            <Link href="https://dart.dev" target="_blank" rel="noopener noreferrer">
                                                <Image src="/projects/dart.png" alt="DART PICTURE" width={50} height={50} />
                                            </Link>
                                        </CardFooter>
                                    </div>
                                </Card>
                                {/* Cartão 2 */}
                                <Card className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4 bg-azure-950 p-4">
                                    <Image
                                        src="/projects/bgl.jpg"
                                        alt="Avatar"
                                        width={200}
                                        height={200}
                                        className="rounded-md object-cover flex-shrink-0"
                                    />
                                    <div className="mt-4 lg:mt-0 lg:flex-1 text-center lg:text-left">
                                        <CardHeader>
                                            <CardTitle className="text-xl sm:text-2xl lg:text-4xl">Brasil Gamer Life</CardTitle>
                                            <CardDescription className="text-sm sm:text-lg">
                                                Um simples site com uma Dashboard para um servidor de jogos online
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="flex justify-center lg:justify-end items-center space-x-4 mt-4">
                                            <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                                <Image src="/js.png" alt="JS PICTURE" width={50} height={50} />
                                            </Link>
                                            <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                                <Image src="/react.png" alt="REACT PICTURE" width={50} height={50} />
                                            </Link>
                                            <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                                                <Image src="/projects/next.png" alt="NEXT PICTURE" width={50} height={50} />
                                            </Link>
                                        </CardFooter>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* Imagem à direita */}
                    <div className="flex-shrink-0 w-full max-w-xs lg:max-w-none lg:w-[500px]">
                        <Rocket className="mx-auto lg:mx-0" width={400} height={400} />
                    </div>
                </div>
            </div>
        </main>
    );
}
