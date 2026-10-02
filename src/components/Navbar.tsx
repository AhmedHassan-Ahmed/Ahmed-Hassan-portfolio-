import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { scrollToId } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Achievement", "awards"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Certificates", "certificates"],
  ["Contact", "contact"],
] as const;

type Props = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header className="nav-shell">
      <nav className="nav container">
        <button className="brand" onClick={() => go("home")} aria-label="Go to top">
          AH<span>.</span>
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
          <a className="nav-cta" href={profile.whatsapp} target="_blank" rel="noreferrer">Let's talk</a>
        </div>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
