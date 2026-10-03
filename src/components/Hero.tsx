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
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            LinkedIn
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
  className="hero-card hero-visual"
  initial={{ opacity: 0, scale: 0.9, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
>
  <div className="hero-glow" />

  <motion.div
    className="hero-sphere"
    animate={{
      y: [-8, 8, -8],
      rotate: [0, 360],
    }}
    transition={{
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    }}
  >
    <div className="sphere-light" />
  </motion.div>

  <motion.div
    className="hero-ring ring-1"
    animate={{ rotate: 360 }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <motion.div
    className="hero-ring ring-2"
    animate={{ rotate: -360 }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <motion.div
    className="hero-ring ring-3"
    animate={{ rotate: 360 }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <div className="hero-dot dot-1" />
  <div className="hero-dot dot-2" />
  <div className="hero-dot dot-3" />
</motion.div>
    </section>
  );
}
