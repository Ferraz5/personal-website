import type {LucideIcon} from "lucide-react";
import {Atom, Code2, Database, Leaf, Package, PlugZap, Workflow, Wrench,} from "lucide-react";

export type TechKey =
    | "java"
    | "spring"
    | "rest"
    | "next"
    | "docker"
    | "jenkins"
    | "db"
    | "gha";

export const TECHS: Record<TechKey, { label: string; Icon: LucideIcon; color?: string }> = {
    java: { label: "Java", Icon: Code2 },
    spring: { label: "Spring Boot", Icon: Leaf },
    rest: { label: "REST APIs / Feign", Icon: PlugZap },
    next: { label: "Next.js / React", Icon: Atom },
    docker: { label: "Docker", Icon: Package },
    jenkins: { label: "Jenkins", Icon: Wrench },
    db: { label: "PostgreSQL / SQL Server", Icon: Database },
    gha: { label: "GitHub Actions", Icon: Workflow },
};
