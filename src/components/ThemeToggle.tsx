"use client";
import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";

export default function ThemeToggle({className = ""}: { readonly className?: string }) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const enable = stored ? stored === "dark" : prefers;
        document.documentElement.classList.toggle("dark", enable);
        setDark(enable);
    }, []);

    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
        document.documentElement.style.setProperty("--x", `${rect.left + rect.width/2}px`);
        document.documentElement.style.setProperty("--y", `${rect.top + rect.height/2}px`);

        document.documentElement.classList.add("theme-animating");
        setTimeout(() => {
            const next = !dark;
            document.documentElement.classList.toggle("dark", next);
            localStorage.setItem("theme", next ? "dark" : "light");
            setDark(next);
            document.documentElement.classList.remove("theme-animating");
        }, 120); // pequeno atraso p/ ver o glow
    };

    return (
        <button onClick={toggle}
                aria-label="Alternar tema"
                className={`btn btn-ghost !px-3 !py-2 transition-transform active:scale-95 ${className}`}>
      <span className="relative inline-grid place-items-center size-6">
        <Sun  className={`absolute transition-all duration-500 ${dark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`} size={18}/>
        <Moon className={`absolute transition-all duration-500 ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`} size={18}/>
      </span>
            <span className="hidden sm:inline">{dark ? "Claro" : "Escuro"}</span>
        </button>
    );
}