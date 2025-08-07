// src/components/About.tsx
import Image from "next/image";
import avatar from "/TiagoFerraz.png"; // sem "@/public"

export default function About() {
    return (
        <section className="max-w-5xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10">
            <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
                <Image
                    src="/TiagoFerraz.png"
                    alt="Tiago Ferraz"
                    width={160}
                    height={160}
                    className="object-cover"
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
                <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                    I'm a <strong className="text-blue-600 dark:text-blue-400">Software Engineering</strong> student at <strong>ISEP</strong> and currently working as a <strong>Junior Java Developer</strong> at <strong>NiW (Salvador Caetano)</strong>.
                    I’m passionate about building clean, scalable backend systems, especially using <strong>Java</strong>, <strong>Spring Boot</strong>, and integrating third-party <strong>REST APIs</strong>.
                </p>
                <p className="text-lg leading-relaxed mt-4 text-gray-800 dark:text-gray-200">
                    I love solving problems, learning new technologies and contributing to real-world applications. My recent work includes projects with <strong>Feign</strong>, <strong>Docker</strong>, <strong>Jenkins</strong>, and database technologies like <strong>PostgreSQL</strong> and <strong>SQL Server</strong>.
                </p>
            </div>
        </section>
    );
}
