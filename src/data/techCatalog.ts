import {
    SiDocker,
    SiGithubactions,
    SiJenkins,
    SiNextdotjs,
    SiNodedotjs,
    SiOpenapiinitiative,
    SiOpenjdk,
    SiPostgresql,
    SiReact,
    SiSpringboot,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import {Database, PlugZap} from "lucide-react";

export type TechId =
    | "java"
    | "spring"
    | "rest"
    | "react"
    | "next"
    | "docker"
    | "jenkins"
    | "postgres"
    | "sqlserver"
    | "gha"
    | "ts"
    | "node"
    | "tailwind"
    | "openapi";

export type TechMeta = {
    id: TechId;
    label: string;
    color: string;
    // ComponentType aceita tanto react-icons quanto lucide
    Icon: React.ComponentType<{ size?: number }>;
};

// ...
export const TECH_CATALOG: Record<TechId, TechMeta> = {
    java:      { id: "java",      label: "Java",              color: "#EA2D2E", Icon: SiOpenjdk },
    spring:    { id: "spring",    label: "Spring Boot",       color: "#6DB33F", Icon: SiSpringboot },
    rest:      { id: "rest",      label: "REST / Feign",      color: "#FFB400", Icon: PlugZap },
    react:     { id: "react",     label: "React",             color: "#61DAFB", Icon: SiReact },
    next: {id: "next", label: "Next.js", color: "#6f44ff", Icon: SiNextdotjs},
    docker:    { id: "docker",    label: "Docker",            color: "#2496ED", Icon: SiDocker },
    jenkins:   { id: "jenkins",   label: "Jenkins",           color: "#D33833", Icon: SiJenkins },
    postgres:  { id: "postgres",  label: "PostgreSQL",        color: "#4169E1", Icon: SiPostgresql },
    sqlserver: { id: "sqlserver", label: "SQL Server",        color: "#CC2927", Icon: Database },
    gha:       { id: "gha",       label: "GitHub Actions",    color: "#2088FF", Icon: SiGithubactions },
    ts:        { id: "ts",        label: "TypeScript",        color: "#3178C6", Icon: SiTypescript },
    node:      { id: "node",      label: "Node.js",           color: "#339933", Icon: SiNodedotjs },
    tailwind:  { id: "tailwind",  label: "Tailwind CSS",      color: "#06B6D4", Icon: SiTailwindcss },
    openapi:   { id: "openapi",   label: "OpenAPI / Swagger", color: "#85EA2D", Icon: SiOpenapiinitiative },
};
