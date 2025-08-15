import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Projetos</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
            </div>
        </div>
    );
}
