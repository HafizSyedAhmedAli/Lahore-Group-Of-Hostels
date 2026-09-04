# Lahore Group of Hostels

Marketing website for Lahore Group of Hostels, built with Next.js and Tailwind CSS. Presents the hostel's branches, room pricing, meals, amenities, gallery, and direct WhatsApp-based booking contact — no backend or database, all content is static/in-code.

**Live:** https://lahore-group-of-hostels.netlify.app/

## Features

- Hero section with video tour
- Branch info for two locations (Thokar Niaz Baig main branch, Johar Town branch) with maps and per-branch contacts
- Room pricing
- Meals plan overview
- Amenities / pillars sections
- Photo gallery
- Testimonials
- "How it works" booking flow
- Light/dark theme toggle (next-themes)
- One-click WhatsApp contact buttons, prefilled with a default inquiry message
- Smooth scroll/entrance animations (motion)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- next-themes (theme switching)
- motion (animations)
- lucide-react (icons)

## Prerequisites

- Node.js 18+
- npm (or bun — a bun.lock is included)

## Setup

git clone https://github.com/HafizSyedAhmedAli/Lahore-Group-Of-Hostels.git
cd Lahore-Group-Of-Hostels
npm install
npm run dev

App runs at http://localhost:3000

## Scripts

npm run dev      # start dev server
npm run build    # production build
npm start        # start production server
npm run lint     # lint

## Project Structure

.
├── app/                 # Next.js App Router entry (layout, page, globals.css)
├── components/          # UI sections (Hero, Gallery, RoomPricing, Meals, Amenities, etc.)
│   └── motion/          # animation wrapper components
├── lib/
│   └── contact.ts       # single source of truth for branch info, phone numbers, WhatsApp links
└── public/
    ├── gallery/         # gallery images
    └── videos/          # hero/video tour assets

## Configuration

No environment variables are required. All branch details, phone numbers, and default WhatsApp message text are defined in lib/contact.ts — update that file to change contact info across the whole site.

## Deployment

Includes a netlify.toml, so the project is set up to deploy on Netlify out of the box (currently hosted there). It can also be deployed on Vercel or any Node-compatible host as a standard Next.js app.

## License

No license specified — all rights reserved by the author unless stated otherwise.
