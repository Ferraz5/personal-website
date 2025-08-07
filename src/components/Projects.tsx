const projects = [
    {
        title: "SkillSphere",
        description: "Interactive developer portfolio platform (Next.js + Spring Boot)",
        link: "https://github.com/Ferraz5/skillsphere",
    },
    {
        title: "DigitalPayments",
        description: "Payment API integration with EasyPay (Java + Feign)",
        link: "https://github.com/Ferraz5/digitalpayments",
    },
    {
        title: "Vehicle Documentation",
        description: "Document generation system for vehicle data (Java + JDBC)",
        link: "https://github.com/Ferraz5/vehicledocs",
    },
    {
        title: "RailNetwork Sim",
        description: "Academic railway network simulator (Java + Python)",
        link: "https://github.com/Ferraz5/railnetwork-sim",
    },
];

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map(({ title, description, link }) => (
                    <a
                        key={title}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600">
                            {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}