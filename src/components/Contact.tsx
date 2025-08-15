import { Mail, Github, Linkedin, Download } from "lucide-react";

export default function Contact(){
    return (
        <section id="contact" className="card text-center">
            <h3 className="text-2xl font-bold">Contacta-me</h3>
            <p className="opacity-80 mt-1">Networking, colaborações ou só dizer olá 👋</p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:tiago.ferraz.dev@gmail.com" className="btn btn-ghost"><Mail size={18}/> Email</a>
                <a href="https://github.com/Ferraz5" target="_blank" className="btn btn-ghost"><Github size={18}/> GitHub</a>
                <a href="https://www.linkedin.com/in/tiago-ferraz" target="_blank" className="btn btn-primary"><Linkedin size={18}/> LinkedIn</a>
                <a href="/TiagoFerraz-CV.pdf" download className="btn btn-ghost"><Download size={18}/> Download CV</a>
            </div>
        </section>
    );
}