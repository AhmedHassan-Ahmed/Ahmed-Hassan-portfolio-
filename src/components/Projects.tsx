import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="02 / PROJECTS" title="Selected software projects">
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
            whileHover={{ y: -7 }}
          >
            <div className="project-top">
              <span className="project-category">{project.category}</span>
              {project.links.some((link) => link.label === "GitHub") ? <Github size={19} /> : <ExternalLink size={19} />}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="chip-row">
              {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}