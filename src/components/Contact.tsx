export default function Contact() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-4">Feel free to reach out via email or connect on LinkedIn/GitHub!</p>
            <div className="flex flex-col md:flex-row gap-4">
                <a href="mailto:tiago.ferraz.dev@gmail.com" className="underline">tiago.ferraz.dev@gmail.com</a>
                <a href="https://github.com/tiago-ferraz-dev" target="_blank" className="underline">GitHub</a>
                <a href="https://linkedin.com/in/tiagoferraz" target="_blank" className="underline">LinkedIn</a>
            </div>
        </section>
    );
}