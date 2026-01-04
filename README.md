# Workroom wannasleep

A digital workshop website crafted for thoughtful software development.

## Philosophy

Software born in the quiet hours before sleep. Built with care, intention, and imagination.

This is not a generic agency template or SaaS landing page. It's a studio website for young, formally educated computer science graduates who value philosophy over speed, craft over commodity.

## Design Principles

- **Warm & Minimal**: Soft dark backgrounds, generous spacing, calm typography
- **Thoughtful Motion**: Subtle animations that enhance, never distract
- **Editorial Layout**: Clean, studio-like aesthetic inspired by creative workshops
- **Cosmic & Quiet**: Colors and language that evoke late-night contemplation

## Tech Stack

- **Next.js 14** - Modern React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with CSS-based theme configuration
- **Framer Motion** - Elegant, performant animations

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── components/
│   └── Navigation.tsx      # Site navigation with subtle animations
├── studio/
│   └── page.tsx           # Philosophy and studio values
├── works/
│   └── page.tsx           # Project showcase with cards
├── contact/
│   └── page.tsx           # Minimal contact information
├── page.tsx               # Home page with philosophical headline
├── layout.tsx             # Root layout with metadata
├── globals.css            # Custom theme and global styles
└── not-found.tsx          # Custom 404 page
```

## Customization

### Theme Colors

Edit `app/globals.css` to customize the color palette:

```css
:root {
  --background: #1a1814;           /* Warm dark background */
  --accent-indigo: #6366a3;        /* Cosmic accent */
  --accent-blue: #4a5f7f;          /* Thoughtful blue */
  --accent-warm: #8b7f6f;          /* Warm neutral */
}
```

### Content

- **Home**: Edit `app/page.tsx` for the main headline
- **Studio**: Update philosophy sections in `app/studio/page.tsx`
- **Works**: Modify project data in `app/works/page.tsx`
- **Contact**: Change email in `app/contact/page.tsx`

## Build & Deploy

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

Deploy to Vercel, Netlify, or any platform that supports Next.js.

## Design Intent

This website should convey:

> "These people are young, but serious. They care deeply about how things are made."

The tone is slow, warm, thoughtful, and intelligent. Not corporate. Not aggressive. Not sales-heavy.

A workshop for software craft.
