import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center px-4 sm:px-20 gap-20">
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
