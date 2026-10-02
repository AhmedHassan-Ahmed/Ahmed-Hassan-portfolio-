import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main>
        <Hero />
        <section id="about" className="about-strip container">
          <span>ABOUT</span>
          <p>
            Software Engineer and Full-Stack Developer with hands-on experience
            across modern frontend development, backend API integration, and
            team-based backend systems. Experienced in React.js, JavaScript,
            Node.js, Express.js, Laravel API integration, MongoDB, REST APIs,
            authentication, and responsive web development. Strong foundation in
            software engineering, reusable architecture, state management,
            databases, Git/GitHub, problem solving, data structures, and
            algorithms.
          </p>
        </section>
        <Experience />
        <Awards />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
