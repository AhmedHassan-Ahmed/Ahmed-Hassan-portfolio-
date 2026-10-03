import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="01 / EXPERIENCE"
      title="Where I’m building experience"
    >
      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: index % 2 ? 18 : -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <div
              className={`timeline-dot ${item.current ? "current" : "completed"}`}
            />
            <div className="timeline-card">
              <div className="timeline-meta">
                {item.start} — {item.current ? "Present" : item.end}
              </div>
              <h3>{item.role}</h3>
              <p className="company">
                {item.company} · {item.type}
              </p>
              <p>{item.description}</p>
              <div className="chip-row">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
