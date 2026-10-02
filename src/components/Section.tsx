import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="section container">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}