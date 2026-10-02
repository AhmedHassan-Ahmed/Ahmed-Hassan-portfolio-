import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 / SKILLS" title="A practical engineering toolkit">
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <h3>{group.title}</h3>
            <div className="chip-row">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}