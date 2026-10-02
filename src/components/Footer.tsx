import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <span>Software Engineer · Full-Stack Developer</span>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}