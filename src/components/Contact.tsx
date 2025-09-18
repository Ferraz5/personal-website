import {Download, Mail} from "lucide-react";

export default function Contact(){
    return (
        <section id="contact" className="card text-center">
            <h3 className="text-2xl font-bold">Contacta-me</h3>
            <p className="opacity-80 mt-1">Networking, colaborações ou só dizer olá 👋</p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:tiago.ferraz.dev@gmail.com" className="btn btn-ghost"><Mail size={18}/> Email</a>
                <a href="https://github.com/Ferraz5" target="_blank" className="btn btn-ghost" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-github">
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 5.77a5.07 5.07 0 0 0-.09-3.86S18.73 1.56 16 3a13.38 13.38 0 0 0-7 0C6.27 1.56 5.09 1.91 5.09 1.91A5.07 5.07 0 0 0 5 5.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/tiago-ferraz" target="_blank" className="btn btn-primary"
                   aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5h-4v-5a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                </a>
                <a href="/TiagoFerraz-CV.pdf" download className="btn btn-ghost"><Download size={18}/> Download CV</a>
            </div>
        </section>
    );
}