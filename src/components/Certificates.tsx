import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data/certificates";
import { Section } from "./Section";

export function Certificates() {
  const mainCertifications = certificates.filter(
    (certificate) => certificate.category === "certifications",
  );

  const otherCertificates = certificates.filter(
    (certificate) => certificate.category === "other",
  );

  const renderCertificates = (items: typeof certificates) => (
    <div className="certificate-grid">
      {items.map((certificate, index) => (
        <motion.article
          className="certificate-card"
          key={`${certificate.title}-${certificate.issuer}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.45,
            delay: (index % 3) * 0.04,
          }}
        >
          <div className="certificate-icon">
            <Award size={19} />
          </div>

          <div>
            <div className="certificate-date">{certificate.date}</div>

            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>

            <div className="chip-row">
              {certificate.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            {certificate.link && (
              <a
                className="inline-link"
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
              >
                Verify credential
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );

  return (
    <Section
      id="certificates"
      eyebrow="04 / CERTIFICATIONS"
      title="Certifications & continuous learning"
    >
      {mainCertifications.length > 0 && (
        <div className="certificate-section">
          <div className="subsection-heading">
            <span>Certifications</span>
            <p>Selected professional certifications</p>
          </div>

          {renderCertificates(mainCertifications)}
        </div>
      )}

      {otherCertificates.length > 0 && (
        <div className="certificate-section">
          <div className="subsection-heading spacer">
            <span></span>
            <span>Other Certificates</span>
            <p>Additional courses, training, and learning achievements</p>
          </div>

          {renderCertificates(otherCertificates)}
        </div>
      )}
    </Section>
  );
}
