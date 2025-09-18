import Link from "next/link";
import {TechRow} from "./TechBadge";
import type {Project} from "@/data/projects";

export default function ProjectCard({p}: { readonly p: Project }) {
    return (
        <Link
            href={`/projects/${p.slug}`}
            className="card group hover:-translate-y-1 hover:shadow-xl transition block"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    {p.subtitle && <p className="text-sm opacity-70">{p.subtitle}</p>}
                </div>
                {p.year && <span className="text-xs opacity-60">{p.year}</span>}
            </div>

            <p className="mt-2 opacity-80">{p.summary}</p>
            <div className="mt-4">
                <TechRow items={p.techs} />
            </div>

            <span className="mt-4 inline-flex text-[13px] text-[var(--primary)] group-hover:underline">
        Ver detalhes →
      </span>
        </Link>
    );
}