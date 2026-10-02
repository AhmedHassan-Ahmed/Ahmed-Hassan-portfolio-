import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import { Section } from "./Section";

export function Projects() {
  const frontendProjects = projects.filter(
    (project) => project.category === "frontend",
  );

  const backendProjects = projects.filter(
    (project) => project.category === "backend",
  );

  const renderProjects = (items: typeof projects) => (
    <div className="project-grid">
      {items.map((project, index) => (
        <motion.article
          className="project-card"
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.5,
            delay: (index % 3) * 0.06,
          }}
          whileHover={{ y: -7 }}
        >
          <div className="project-top">
            <span className="project-category">
              {project.category === "frontend" ? "Frontend" : "Backend"}
            </span>

            {project.links.some((link) => link.label === "GitHub") ? (
              <Github size={19} />
            ) : (
              <ExternalLink size={19} />
            )}
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="chip-row">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}
        </motion.article>
      ))}
    </div>
  );

  return (
    <Section
      id="projects"
      eyebrow="02 / PROJECTS"
      title="Selected software projects"
    >
      {frontendProjects.length > 0 && (
        <div className="project-section">
          <div className="subsection-heading">
            <span>Frontend Projects</span>
            <p>
              Responsive interfaces, web applications, and frontend experiences
            </p>
          </div>

          {renderProjects(frontendProjects)}
        </div>
      )}

      {backendProjects.length > 0 && (
        <div className="project-section">
          <div className="subsection-heading spacer">
            <span>Backend Projects</span>
            <p>APIs, backend platforms, databases, and server-side systems</p>
          </div>

          {renderProjects(backendProjects)}
        </div>
      )}
    </Section>
  );
}
