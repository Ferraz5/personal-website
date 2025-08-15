"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Download } from "lucide-react";
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
                        <a href="https://github.com/Ferraz5" target="_blank" className="btn btn-ghost !px-3" aria-label="GitHub"><Github size={18}/></a>
                        <a href="https://www.linkedin.com/in/tiago-ferraz" target="_blank" className="btn btn-ghost !px-3" aria-label="LinkedIn"><Linkedin size={18}/></a>
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
