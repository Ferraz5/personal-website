"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (stored === "dark" || (!stored && prefersDark)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        html.classList.add("transition-colors", "duration-500");
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text shadow z-50 transition-colors duration-500">
            <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="font-bold text-xl text-light-primary dark:text-dark-primary">Tiago Ferraz</h1>
                <div className="flex items-center gap-6">
                    <ul className="flex gap-6">
                        {navItems.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="text-sm hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300 scroll-smooth"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button onClick={toggleTheme} aria-label="Toggle Theme">
                        {isDark ? (
                            <Sun className="text-yellow-400 transition-all duration-300" />
                        ) : (
                            <Moon className="text-gray-700 transition-all duration-300" />
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}