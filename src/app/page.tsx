import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home(){
    return (
        <div className="space-y-10 sm:space-y-14">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
        </div>
    );
}
