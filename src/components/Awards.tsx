import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { awards } from "../data/awards";
import { Section } from "./Section";

export function Awards() {
  return (
    <Section id="awards" eyebrow="05 / ACHIEVEMENT" title="Recognition">
      <div className="awards-list">
        {awards.map((award) => (
          <motion.article
            className="award-card"
            key={award.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="award-icon"><Trophy size={24} /></div>
            <div>
              <div className="certificate-date">{award.date}</div>
              <h3>{award.title}</h3>
              <p>{award.organization}</p>
              <ul>{award.description.map((line) => <li key={line}>{line}</li>)}</ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}