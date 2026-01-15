

## Aman Soni – Portfolio

This repository contains the source code for my personal developer portfolio – a single-page application showcasing my background, skills, projects, and contact information.

The site is built and maintained by me to feel like a hand-crafted, “coded” portfolio rather than a generated template.

---

### Tech Stack

- **React 18** + **TypeScript**
- **Vite** (bundler/dev server)
- **Tailwind CSS** for styling
- **shadcn/ui** for accessible, composable UI components
- **lucide-react** for icons
- **EmailJS** for contact form email delivery

---

### Getting Started (Local Development)

Prerequisites:
- **Node.js** (LTS recommended) and **npm**

Clone and run:

```bash
git clone https://github.com/amansoni2404/portfolio.git
cd portfolio/my-awesome-portfolio-main/my-awesome-portfolio-main

npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

---

### Environment Variables (EmailJS)

The contact form uses **EmailJS** to send messages directly to my inbox without a custom backend.

Create a `.env` file in `my-awesome-portfolio-main/my-awesome-portfolio-main` with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

These values come from your EmailJS dashboard:
- **Service ID** – from *Email Services*
- **Template ID** – from *Email Templates*
- **Public Key** – from *Account → API Keys*

The template is expected to support the following variables:
- `from_name`
- `from_email`
- `subject`
- `message`
- `to_email`

After editing `.env`, restart the dev server.

---

### Build & Production

To create a production build:

```bash
npm run build
```

The optimized static files will be output to the `dist` directory.  
You can deploy this folder to any static hosting provider (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

---

### Project Structure (high level)

- `src/components/Navbar.tsx` – top navigation bar and signature-style name
- `src/components/Hero.tsx` – hero section with portrait and intro
- `src/components/Projects.tsx` – featured projects showcase
- `src/components/Contact.tsx` – contact details + EmailJS-powered form
- `src/components/Footer.tsx` – footer and social links
- `src/index.css` – global styles and Tailwind layers
- `vite.config.ts` – Vite configuration and path aliases

---

### License

This is my personal portfolio. You’re welcome to look around and take inspiration, but please do not copy it wholesale and present it as your own work.
