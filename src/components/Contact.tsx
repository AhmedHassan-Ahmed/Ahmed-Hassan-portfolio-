import { FormEvent, useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { openWhatsApp } from "../lib/utils";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    openWhatsApp(
      String(form.get("name") ?? ""),
      String(form.get("email") ?? ""),
      String(form.get("message") ?? ""),
    );
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="07 / CONTACT" title="Let's build something useful">
      <div className="contact-layout">
        <div className="contact-copy">
          <p>
            Have a project, internship, or software engineering opportunity?
            Send your message directly through WhatsApp and I&apos;ll get back to you.
          </p>
          <div className="contact-details">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
            <a href={`tel:${profile.phone}`}><Phone size={18} /> {profile.phone}</a>
            <span className="contact-note">The form opens WhatsApp with your details pre-filled.</span>
          </div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required name="message" rows={5} placeholder="Tell me about your project or opportunity..." /></label>
          <button className="button primary" type="submit"><Send size={17} /> Send via WhatsApp</button>
          {sent && <small className="form-note">Opening WhatsApp…</small>}
        </motion.form>
      </div>
    </Section>
  );
}
