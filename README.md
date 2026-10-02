# Ahmed Hassan Ahmed — React + TypeScript Portfolio

A maintainable personal portfolio for **Software Engineer | Full-Stack Developer**, built with React, TypeScript, Framer Motion, and GSAP.

## Stack

- React + TypeScript
- Vite
- Framer Motion
- GSAP
- Lucide React
- Responsive CSS

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Architecture

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Certificates.tsx
│   ├── Awards.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── profile.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── certificates.ts
│   └── awards.ts
├── hooks/
│   └── useGsapIntro.ts
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── styles.css
```

## Updating the portfolio

Most content is intentionally data-driven. Add/edit items in:

- `src/data/experience.ts`
- `src/data/projects.ts`
- `src/data/certificates.ts`
- `src/data/awards.ts`
- `src/data/skills.ts`
- `src/data/profile.ts`

The UI components map over those arrays, so new entries do not require rewriting the layout.

## Contact form

The form currently opens the user's email client using `mailto:`. If you later want server-side form submissions, replace the submit handler in `src/components/Contact.tsx` with Formspree, Resend, EmailJS, or your own backend endpoint.

## Animation approach

Framer Motion handles React-native UI transitions, viewport reveals, hover interactions, and layout-friendly motion. GSAP is used for the small hero intro sequence only, keeping the animation system purposeful instead of excessive.

The current Motion/Framer ecosystem supports viewport, gesture, and layout animations, while GSAP is useful for timeline-style sequences.


### Latest UI updates
- Light/dark mode toggle with localStorage persistence.
- Brighter professional palette with Inter + Manrope typography.
- Achievement section moved directly after Experience and visually highlighted.
- Contact form now opens WhatsApp with the submitted name, email, and message pre-filled.
- Larger spacing/type scale for comfortable viewing without browser zoom.
- GSAP remains used for the hero intro; animations respect reduced-motion preferences.
# Ahmed-Hassan-portfolio-
