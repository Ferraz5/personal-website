export default function TechStack() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside">
                <li>Java / Spring Boot</li>
                <li>Feign / REST APIs</li>
                <li>Next.js / React</li>
                <li>Docker / Jenkins</li>
                <li>PostgreSQL / SQL Server</li>
                <li>Git / GitHub Actions</li>
            </ul>
        </section>
    );
}