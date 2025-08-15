"use client";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
    { label: "Sobre", href: "#about" },
    { label: "Stack", href: "#tech" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
];

export default function Navbar() {
    const [dark, setDark] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/90 dark:bg-background/90 shadow-md backdrop-blur transition">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                <span className="font-bold text-primary text-xl">Tiago Ferraz</span>
                <ul className="flex gap-8">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="hover:text-primary font-medium transition">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => {
                        document.documentElement.classList.toggle("dark");
                        setDark((d) => !d);
                    }}
                    className="ml-6 text-primary hover:text-accent transition"
                >
                    {dark ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </nav>
        </header>
    );
}