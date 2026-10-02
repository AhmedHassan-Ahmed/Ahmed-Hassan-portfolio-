import {
  ArrowDown,
  Github,
  Linkedin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { scrollToId } from "../lib/utils";
import { useGsapIntro } from "../hooks/useGsapIntro";

export function Hero() {
  useGsapIntro(".hero-reveal");

  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <div className="hero-reveal hero-kicker">
          SOFTWARE ENGINEER · FULL-STACK DEVELOPER
        </div>

        {/* Name */}
        <h2 className="hero-reveal hero-name">Ahmed Hassan Ahmed</h2>

        {/* Main headline */}
        <h1 className="hero-reveal">
          Building digital products
          <span> from interface to API.</span>
        </h1>

        <p className="hero-reveal hero-summary">{profile.summary}</p>

        <div className="hero-reveal hero-actions">
          <button
            className="button primary"
            onClick={() => scrollToId("projects")}
          >
            Explore projects
            <ArrowDown size={17} />
          </button>

          <a
            className="button ghost"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            WhatsApp me
          </a>
        </div>

        <div className="hero-reveal social-row">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a href={`tel:${profile.phone}`}>
            <Phone size={18} />
            {profile.phone}
          </a>
        </div>
      </div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <div className="orb orb-one" />
        <div className="orb orb-two" />

        <div className="terminal">
          <div className="terminal-top">
            <i />
            <i />
            <i />
            <span>ahmed@portfolio:~</span>
          </div>

          <pre>{`const engineer = {
  role: "Software Engineer",
  stack: ["React", "Node.js", "TypeScript"],
  focus: "Full-Stack Development",
  status: "building 🚀"
};`}</pre>
        </div>

        <div className="hero-stat">
          <strong>Full-Stack</strong>
          <span>Frontend + Backend + APIs</span>
        </div>
      </motion.div>
    </section>
  );
}
