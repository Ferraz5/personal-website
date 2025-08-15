// src/components/TechBadge.tsx
import type { IconType } from "react-icons";
import {
    SiSpringboot, SiReact, SiNextdotjs, SiDocker, SiJenkins,
    SiPostgresql, SiTailwindcss, SiNodedotjs,
    SiGithubactions, SiTypescript, SiSwagger, SiApache,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di"; // se preferires, troca por SiMicrosoftsqlserver

export type TechKey =
    | "java" | "spring" | "react" | "next" | "docker" | "jenkins"
    | "postgres" | "sqlserver" | "tailwind" | "node"
    | "githubactions" | "typescript" | "openapi" | "feign";

// 👇 usa IconType (do react-icons) para permitir `size`, `color`, etc.
type TechDef = { label: string; Icon: IconType; color: string };

export const TECH: Record<TechKey, TechDef> = {
    java:          { label: "Java",            Icon: FaJava,           color: "#e11d48" },
    spring:        { label: "Spring Boot",     Icon: SiSpringboot,     color: "#22c55e" },
    react:         { label: "React",           Icon: SiReact,          color: "#22d3ee" },
    next:          { label: "Next.js",         Icon: SiNextdotjs,      color: "#ffffff" },
    docker:        { label: "Docker",          Icon: SiDocker,         color: "#38bdf8" },
    jenkins:       { label: "Jenkins",         Icon: SiJenkins,        color: "#f97316" },
    postgres:      { label: "PostgreSQL",      Icon: SiPostgresql,     color: "#60a5fa" },
    sqlserver:     { label: "SQL Server",      Icon: DiMsqlServer,     color: "#ef4444" },
    tailwind:      { label: "Tailwind CSS",    Icon: SiTailwindcss,    color: "#22d3ee" },
    node:          { label: "Node.js",         Icon: SiNodedotjs,      color: "#22c55e" },
    githubactions: { label: "GitHub Actions",  Icon: SiGithubactions,  color: "#60a5fa" },
    typescript:    { label: "TypeScript",      Icon: SiTypescript,     color: "#3b82f6" },
    openapi:       { label: "OpenAPI / Swagger", Icon: SiSwagger,      color: "#facc15" },
    feign:         { label: "REST / Feign",    Icon: SiApache,         color: "#f59e0b" },
};

export function TechBadge({ tech }: { tech: TechKey }) {
    const T = TECH[tech];
    if (!T) return null;
    return (
        <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-medium border border-white/10 bg-white/5 dark:bg-white/5"
            style={{ color: T.color }}
            title={T.label}
        >
      <T.Icon size={14} /> {}
            <span className="text-foreground/90">{T.label}</span>
    </span>
    );
}

export function TechRow({ items }: { items: TechKey[] }) {
    if (!items?.length) return null;
    return (
        <div className="flex flex-wrap gap-2">
            {items.map((k) => <TechBadge key={k} tech={k} />)}
        </div>
    );
}