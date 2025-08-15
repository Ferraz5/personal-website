import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { TechRow } from "@/components/TechBadge";

type Props = { params: { slug: string } };

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: Props) {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) return notFound();

    return (
        <article className="space-y-6">
            {/* HERO */}
            <header className="card overflow-hidden p-0">
                <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold">{p.title}</h1>
                            {p.subtitle && <p className="opacity-80">{p.subtitle}</p>}
                        </div>
                        {p.year && <span className="text-sm opacity-70">{p.year}</span>}
                    </div>

                    <p className="mt-3 opacity-90">{p.summary}</p>

                    <div className="mt-4">
                        <TechRow items={p.techs} />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                        {p.repo && (
                            <Link href={p.repo} target="_blank" className="btn btn-ghost">
                                GitHub
                            </Link>
                        )}
                        {p.demo && (
                            <Link href={p.demo} target="_blank" className="btn btn-primary">
                                Live Demo
                            </Link>
                        )}
                    </div>
                </div>

                {/* imagem de capa ou gradiente */}
                {p.cover ? (
                    <div className="relative w-full h-[220px] sm:h-[300px]">
                        <Image src={p.cover} alt={p.title} fill priority className="object-cover" />
                    </div>
                ) : (
                    <div className="h-28 sm:h-36 bg-gradient-to-r from-[var(--primary)]/30 to-[var(--secondary)]/30" />
                )}
            </header>

            {/* Descrição longa */}
            {p.long && (
                <section className="card whitespace-pre-wrap leading-7">{p.long}</section>
            )}

            {/* Galeria */}
            {p.images?.length ? (
                <section className="grid sm:grid-cols-2 gap-4">
                    {p.images.map((src) => (
                        <div key={src} className="relative h-48 sm:h-60 rounded-xl overflow-hidden border border-white/10">
                            <Image src={src} alt={`${p.title} screenshot`} fill className="object-cover" />
                        </div>
                    ))}
                </section>
            ) : null}
        </article>
    );
}