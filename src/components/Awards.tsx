import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
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
            <div className="award-icon">
              <Trophy size={24} />
            </div>
            <div>
              <div className="certificate-date">{award.date}</div>
              <h3>{award.title}</h3>
              <p>{award.organization}</p>
              {award.link && (
                <a
                  className="inline-link"
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View competition page for ${award.title}`}
                >
                  View Competition
                  <ExternalLink size={14} />
                </a>
              )}
              <ul>
                {award.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
