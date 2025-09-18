"use client";

import Image from "next/image";
import {Download, Mail} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const nav = [
    { href:"#about", label:"Sobre" },
    { href:"#tech",  label:"Tech Stack" },
    { href:"#projects", label:"Projetos" },
    { href:"#contact",  label:"Contacto" },
];

export default function Sidebar(){
    return (
        <div className="h-full flex flex-col">
            <div className="p-6">
                <div className="rounded-2xl bg-[var(--primary)]/10 dark:bg-[var(--primary)]/15 p-6 text-center">
                    <div
                        className="relative mx-auto rounded-full overflow-hidden border-4 border-white/80 shadow-lg"
                        style={{ width: 112, height: 112 }}  // <- fallback de segurança
                    >
                        <Image
                            src="/TiagoFerraz.png"
                            alt="Tiago Ferraz"
                            fill
                            sizes="112px"
                            className="object-cover"
                            priority
                        />
                    </div>


                    <h1 className="mt-4 text-xl font-extrabold">Tiago Ferraz</h1>
                    <p className="text-sm opacity-80">
                        Junior Java Developer<br/>Software Engineering Student @ ISEP
                    </p>

                    <div className="mt-4 flex justify-center gap-2">
                        <a href="mailto:tiagoairesmferraz@gmail.com" className="btn btn-ghost !px-3" aria-label="Email"><Mail size={18}/></a>
                        <a href="https://github.com/Ferraz5" target="_blank" className="btn btn-ghost !px-3"
                           aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-github">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 5.77a5.07 5.07 0 0 0-.09-3.86S18.73 1.56 16 3a13.38 13.38 0 0 0-7 0C6.27 1.56 5.09 1.91 5.09 1.91A5.07 5.07 0 0 0 5 5.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/tiago-ferraz" target="_blank"
                           className="btn btn-ghost !px-3" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-linkedin">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5h-4v-5a6 6 0 0 1 6-6z"/>
                                <rect width="4" height="12" x="2" y="9"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </a>
                    </div>

                    <a
                        className="btn btn-primary w-full mt-4 justify-center"
                        href="/TiagoFerraz-CV.pdf" download
                    >
                        <Download size={18}/> Download CV
                    </a>
                </div>

                <nav className="mt-6 space-y-1">
                    {nav.map(i=>(
                        <a key={i.href} href={i.href} className="block px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition">
                            {i.label}
                        </a>
                    ))}
                </nav>

                <ThemeToggle className="w-full mt-4 justify-center" />
            </div>

            <div className="mt-auto p-6 text-xs opacity-70">
                © {new Date().getFullYear()} Tiago Ferraz
            </div>
        </div>
    );
}
