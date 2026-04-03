# NUZEAL 2026 Website

Official website for NUZEAL 2026, built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project is a modern, responsive frontend for the NUZEAL cultural festival website.
It includes:

- Landing experience with themed hero and sections
- Event listings and registration links
- Itinerary schedule
- Live leaderboard data from Google Sheets
- Team and contact sections

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Framer Motion
- React Router DOM
- TanStack Query
- Radix UI + shadcn/ui components

## Project Structure

```text
src/
  components/      Reusable UI + page sections
  pages/           Route pages (Index, Register, Team, NotFound)
  assets/          Images and branding assets
  hooks/           Custom React hooks
  lib/             Utility helpers
```

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open in browser

- http://localhost:5173

## Available Scripts

```bash
npm run dev         # Start local dev server
npm run build       # Build for production
npm run build:dev   # Build with development mode
npm run preview     # Preview production build locally
npm run lint        # Run ESLint checks
npm run test        # Run tests once
npm run test:watch  # Run tests in watch mode
```

## Build Output

Production files are generated in the `dist/` directory.

## Deployment

This project is ready to deploy on Vercel (configuration file included: `vercel.json`).

Typical deployment flow:

1. Push repository to GitHub
2. Import repository in Vercel
3. Use default Vite build settings:
   - Build command: `npm run build`
   - Output directory: `dist`

## Notes

- This repository currently contains a frontend-only application.
- Event participation data for the leaderboard is fetched from public Google Sheets endpoints.

## Contributing

1. Create a feature branch
2. Commit your changes
3. Run lint/build locally
4. Open a pull request

## License

Use the license that matches your organization or event policy.
If needed, add a `LICENSE` file in the repository root.
