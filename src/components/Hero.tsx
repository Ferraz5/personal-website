import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="card bg-gradient-to-br from-[var(--primary)]/12 to-[var(--secondary)]/10">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
                Olá 👋 Sou o <span className="text-[var(--primary)]">Tiago</span>,
                foco em <span className="text-[var(--secondary)]">backend em Java</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg opacity-80">
                Construo APIs limpas, escaláveis e integrações com <b>Spring Boot, Feign, Docker e Jenkins</b>.
                Gosto de resolver problemas, aprender e entregar impacto real.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                <a
                    href="https://www.linkedin.com/in/tiago-ferraz"
                    target="_blank"
                    className="btn btn-primary"
                >
                    Vamos falar no LinkedIn <ArrowRight size={16} />
                </a>
                <a href="#projects" className="btn btn-ghost">Ver Projetos</a>
            </div>
        </section>
    );
}