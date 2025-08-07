export default function Footer() {
    return (
        <footer
            className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text py-6 mt-20 text-center text-sm transition-colors duration-500">
            <p>&copy; {new Date().getFullYear()} Tiago Ferraz. All rights reserved.</p>
            <div className="mt-2">
                <a href="#about"
                   className="mx-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors">About</a>
                <a href="#tech"
                   className="mx-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors">Tech
                    Stack</a>
                <a href="#projects"
                   className="mx-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors">Projects</a>
                <a href="#contact"
                   className="mx-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors">Contact</a>
            </div>
        </footer>
    );
}
