"use client";

import ThemeToggle from "./ThemeToggle";

export default function Topbar({className = ""}: { readonly className?: string }) {
    return (
        <header className={`backdrop-blur bg-white/80 dark:bg-black/30 border-b border-black/10 dark:border-white/10 ${className}`}>
            <div className="container-xxl flex items-center justify-between py-3">
                <a href="/" className="font-extrabold text-[var(--primary)]">Tiago Ferraz</a>
                <div className="flex items-center gap-2">
                    <a href="#about" className="px-3 py-2">Sobre</a>
                    <a href="#projects" className="px-3 py-2">Projetos</a>
                    <a href="#contact" className="px-3 py-2">Contacto</a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
