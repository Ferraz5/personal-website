import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Projetos</h3>
                <a href="/projects" className="text-[var(--primary)] hover:underline text-sm">Ver todos</a>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
            </div>
        </section>
    );
}