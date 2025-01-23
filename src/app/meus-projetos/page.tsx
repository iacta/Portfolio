"use client";

import NavBar from "../components/navbar";
import Image from "next/image";
import Rocket from "@/../public/rocket.svg";
import {
    Card,
    CardContent,
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
            <div className="flex flex-col mt-10 px-36">
                <div className="flex flex-row items-start space-x-8">
                    <div className="flex-1">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-bold mb-4">Meus Projetos</h1>
                            <p className="text-2xl leading-relaxed text-gray-400 font-semibold">
                                Projetos feitos por mim</p>
                            <div className="mt-6 space-y-5">
                                <Card className="flex items-center space-x-4 bg-azure-950">
                                    {/* Imagem ao lado do conteúdo */}
                                    <Image
                                        src="/projects/square.jpg"
                                        alt="Avatar"
                                        width={150}
                                        height={150}
                                        className="rounded-md object-cover flex-shrink-0"
                                    />
                                    <div>
                                        <CardHeader>
                                            <CardTitle className="text-4xl">Square Cloud Mobile</CardTitle>
                                            <CardDescription className="text-lg">
                                                Um simples App Mobile Dashboard para controlar seus aplicativos na rede de Hospedagens SquareCloud
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {/* nada aqui */}
                                        </CardContent>
                                        <CardFooter className="items-end justify-end p-5 pr-10">
                                            <Link href="https://flutter.dev" legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/projects/flutter.png"
                                                    alt="FLUTTER PICTURE"
                                                    width={50}
                                                    height={50}
                                                    className=""
                                                />
                                            </Link>
                                            <Link href="https://dart.dev" legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/projects/dart.png"
                                                    alt="Avatar"
                                                    width={50}
                                                    height={50}
                                                    className="DART PICTURE"
                                                />
                                            </Link>
                                        </CardFooter>
                                    </div>
                                </Card>
                                <Card className="flex items-center space-x-4 bg-azure-950">
                                    {/* Imagem ao lado do conteúdo */}
                                    <Image
                                        src="/projects/bgl.jpg"
                                        alt="Avatar"
                                        width={300}
                                        height={300}
                                        className="rounded-md object-cover flex-shrink-0"
                                    />
                                    <div>
                                        <CardHeader>
                                            <CardTitle className="text-4xl">Brasil Gamer Life</CardTitle>
                                            <CardDescription className="text-lg">
                                                Um simples site com uma Dashboard para um servidor de jogos online
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {/* nada aqui */}
                                        </CardContent>
                                        <CardFooter className="items-end justify-end p-5 pr-10 space-x-3">
                                            <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                                                <Image src="/js.png" width={50} height={50} alt="JS picture" />
                                            </Link>
                                            <Link href="https://nextjs.org/" legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                                                <Image src="/react.png" width={50} height={50} alt="REACT picture" />
                                            </Link>
                                            <Link href="https://react.dev/" legacyBehavior passHref target="_blank" rel="noopener noreferrer">
                                                <Image
                                                    src="/projects/next.png"
                                                    alt="NEXT picture"
                                                    width={50}
                                                    height={50}
                                                    className=""
                                                />
                                            </Link>
                                        </CardFooter>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* Imagem à direita */}
                    <div className="flex-shrink-0">
                        <Rocket width={500} height={500} />
                    </div>
                </div>
            </div >
        </main >
    );
}
