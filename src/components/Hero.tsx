"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section className="text-center py-24 bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-blue-700 dark:text-blue-300">Tiago Ferraz</h1>
            <p className="text-xl md:text-2xl mb-6 font-medium">Junior Java Developer · Software Engineering Student @ ISEP</p>
            <a
                href="/TiagoFerraz-CV.pdf"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition mb-8"
                target="_blank"
                rel="noopener noreferrer"
            >
                📄 Download CV
            </a>
            <div className="flex justify-center gap-6 text-blue-600 dark:text-blue-400">
                <a href="mailto:tiagoairesmferraz@gmail.com" aria-label="Email" className="hover:scale-110 transition"><Mail size={28} /></a>
                <a href="https://github.com/Ferraz5" target="_blank" aria-label="GitHub" className="hover:scale-110 transition"><Github size={28} /></a>
                <a href="https://www.linkedin.com/in/tiago-ferraz5/" target="_blank" aria-label="LinkedIn" className="hover:scale-110 transition"><Linkedin size={28} /></a>
            </div>
        </section>
    );
}