import type { TechKey } from "@/components/TechBadge";

export type Project = {
    slug: string;
    title: string;
    subtitle?: string;
    summary: string;
    year?: number;
    techs: TechKey[];
    repo?: string;
    demo?: string;
    cover?: string;      // caminho em /public (opcional)
    images?: string[];   // galerias opcionais em /public
    long?: string;       // descrição longa em markdown-like simples
};

export const projects: Project[] = [
    {
        slug: "skillsphere",
        title: "SkillSphere",
        subtitle: "Plataforma de portfolio/skills",
        summary: "Plataforma de portfolio/skills (Next.js + Spring Boot).",
        year: 2025,
        techs: ["next","react","java","spring","githubactions","typescript","tailwind"],
        repo: "https://github.com/Ferraz5/skillsphere",
        cover: "/projects/skillsphere/cover.jpg",
        images: ["/projects/skillsphere/shot-1.jpg", "/projects/skillsphere/shot-2.jpg"],
        long:
            `- CRUD de skills e projetos
- API em Spring Boot com autenticação
- UI reativa em Next.js (App Router) com Tailwind v4
- Actions CI/CD para lint/test/build/deploy`
    },
    {
        slug: "digitalpayments",
        title: "DigitalPayments",
        subtitle: "Integrações EasyPay",
        summary: "Integração com EasyPay (Java + Feign).",
        year: 2024,
        techs: ["java","spring","feign","githubactions"],
        repo: "https://github.com/Ferraz5/digitalpayments",
        cover: "/projects/digitalpayments/cover.jpg",
        long:
            `- Integração REST robusta com Feign
- Resiliência (timeouts/retries) e logs estruturados
- Testes de contrato`
    },
    {
        slug: "vehicledocs",
        title: "Vehicle Docs",
        summary: "Geração de documentos (Java + JDBC).",
        year: 2024,
        techs: ["java","postgres","sqlserver"],
        repo: "https://github.com/Ferraz5/vehicledocs",
    },
    {
        slug: "railnetwork-sim",
        title: "RailNetwork Sim",
        summary: "Simulador académico (Java + Python).",
        year: 2023,
        techs: ["java"],
        repo: "https://github.com/Ferraz5/railnetwork-sim",
    }
];