# Adam Abidi — 3D Developer Portfolio

A modern, high-performance **3D developer portfolio website** built with **React**, **TypeScript**, **Three.js**, **GSAP**, and **WebGL**, with an AI chat persona and a chess page.

## Features

- **3D / WebGL experience** powered by **Three.js**
- Smooth animations with **GSAP**
- Modern **React + TypeScript** codebase
- AI chat assistant (serverless, Groq API) on the `/play` page
- Playable chess against a WASM engine
- Fast, responsive UI (desktop + mobile)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment variables

The AI chat on `/play` requires a Groq API key (server-side only, never exposed to the browser):

1. Copy `.env.example` to `.env`
2. Set `GROQ_API_KEY` to your key from https://console.groq.com/keys

On Vercel, add the same `GROQ_API_KEY` environment variable in the project settings.

## Customization

All personal content (name, bio, experience, projects, skills, tech stack, social links, asset paths) lives in a single typed file:

```
src/data/portfolio.ts
```

## Assets to provide

| File | Purpose | Suggested format |
|---|---|---|
| `public/images/adam-profile.png` | Profile photo (mobile hero + chess opponent avatar) | PNG, portrait, transparent background, ~600×600 |
| `public/Adam_Abidi_CV.pdf` | CV download (RESUME button) | PDF |
| `public/og-image.png` | Open Graph / Twitter card image | PNG, 1200×630 |
| `public/favicon.svg` | Favicon (currently an "AA" placeholder) | SVG, 64×64 |

## Deployment (Vercel)

1. Push this repository to your GitHub account
2. Import it on [vercel.com](https://vercel.com) (framework preset: Vite)
3. Add the `GROQ_API_KEY` environment variable
4. Deploy

## Credits

- Design and 3D scene based on the open-source template by [Redoyanul Haque](https://github.com/red1-for-hek) (MIT License)

## License

This project is open source and available under the **MIT License**. See [LICENSE](LICENSE).
