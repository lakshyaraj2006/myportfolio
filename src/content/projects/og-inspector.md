---
title: OG Inspector
tagline: OG Inspector is a simple tool to fetch Open Graph and Twitter metadata for any website, helping you preview how links will appear on social platforms.
slug: og-inspector
tags: nextjs, typescript
thumbnail: https://res.cloudinary.com/dfubkk4o0/image/upload/v1766300281/Screenshot_2025-12-21_122547_jx0ps7.png
created: Sun 21 Dec 2025
author: Lakshyaraj Dash
githubURL: https://github.com/lakshyaraj2006/url-preview-gen
youtubeURL: https://youtu.be/jJufuYXCIpc
---

## Features

* Fetch Open Graph metadata (title, description, URL, type)
* Fetch Twitter card metadata (title, description, URL, card type)
* Lightweight and fast
* Built with Next.js 13+

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v18 or newer is recommended).

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/og-inspector.git
cd og-inspector
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
Edit `app/page.tsx` to see live updates.

## Project Structure

* `app/` – main app directory (Next.js 13+ App Router)
* `app/page.tsx` – homepage and main logic
* `app/layout.tsx` – global layout
* `app/favicon.ico` – project favicon
* `next.config.js` – Next.js configuration
* `package.json` – dependencies and scripts

## Fonts

This project uses [Geist](https://vercel.com/font) via Next.js `next/font` for optimized font loading.

## Learn More

* [Next.js Documentation](https://nextjs.org/docs) – learn Next.js features and API
* [Learn Next.js](https://nextjs.org/learn) – interactive tutorial
* [Next.js GitHub](https://github.com/vercel/next.js) – source code and contributions

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more options.
