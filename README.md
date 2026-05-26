# Portfolio Website - Ismail Akhtar

Professional portfolio website for UI/UX Manager and Frontend Tech Lead with 10+ years of experience.

## 🚀 Features

- **Responsive Design** - Mobile-first, responsive layout using Tailwind CSS
- **Modern Stack** - Built with Next.js, React, and TypeScript
- **Professional Pages**
  - Home - Hero section with call-to-actions
  - About - Experience and skills showcase
  - Services - Detailed service offerings with pricing
  - Portfolio - Project case studies
  - Blog - Articles on frontend development
  - Contact - Inquiry form with validation
- **Contact Form** - Fully validated form with error handling
- **SEO Optimized** - Meta tags and structured data
- **Performance** - Optimized for fast loading and great Lighthouse scores

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Package Manager**: npm

## 📦 Installation

1. Repository is already set up at `/Users/ismail/Documents/project/mywebsite`

2. Dependencies are already installed

3. Set up environment variables (optional for email)
```bash
cp .env.local.example .env.local
# Edit .env.local with your email service credentials
```

## 🚀 Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── about/page.tsx            # About page
│   ├── services/page.tsx         # Services page
│   ├── portfolio/page.tsx        # Portfolio page
│   ├── blog/page.tsx             # Blog page
│   ├── contact/page.tsx          # Contact page
│   ├── layout.tsx                # Root layout with Header & Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
└── components/
    ├── Header.tsx                # Navigation header
    ├── Footer.tsx                # Footer component
    └── ContactForm.tsx           # Contact form component
```

## 🏠 Pages Overview

### Home (`/`)
- Hero section with your professional summary
- Three key benefits highlighted
- Call-to-action buttons for services, portfolio, and contact

### About (`/about`)
- Professional journey and summary
- Detailed experience at each company
- Core competencies organized by category
- Education information

### Services (`/services`)
- 6 service offerings with pricing
- Detailed features for each service
- Statistics on experience and results
- Call-to-action section

### Portfolio (`/portfolio`)
- 6 project case studies
- Technology stack for each project
- Results and impact metrics
- Link to Behance portfolio

### Blog (`/blog`)
- 6 article previews
- Categories and publication dates
- Newsletter subscription form

### Contact (`/contact`)
- Contact form with validation
- Direct contact information
- FAQ section
- Multiple ways to reach out

## 🔧 Building for Production

Build the optimized production bundle:
```bash
npm run build
npm run start
```

## 📝 Customization

### Update Contact Information
Edit `src/components/Footer.tsx` and `src/app/contact/page.tsx` with your details.

### Add Email Functionality
To enable real email sending:
1. Choose an email service (SendGrid, Mailgun, Gmail SMTP, etc.)
2. Add API credentials to `.env.local`
3. Update `src/app/api/contact/route.ts` with email sending logic

### Customize Portfolio Projects
Edit the `projects` array in `src/app/portfolio/page.tsx`

### Update Services
Edit the `services` array in `src/app/services/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
Connect your GitHub repo to Netlify for automatic deployments

## 📧 Contact Form Integration

Currently, contact form submissions are logged to console. To enable email:

**With SendGrid**:
```bash
npm install @sendgrid/mail
```

Then update `src/app/api/contact/route.ts` to use SendGrid

## 🎨 Color Scheme

- Primary: Blue (#3B82F6)
- Dark Background: Slate (#0F172A)
- Accent: Green (#16A34A)

## 📱 Responsive Design

Fully responsive across:
- Mobile phones (320px+)
- Tablets (640px+)
- Desktop (1024px+)

## ✨ Performance

- Static generation for fast page loads
- TypeScript for type safety
- Zod validation for form inputs
- API routes for server-side handling

## 📄 Next Steps

1. **Update Personal Details**
   - Email in Footer and Contact page
   - Phone number
   - Social links (Behance, LinkedIn, GitHub)

2. **Deploy to Domain**
   - Deploy to Vercel or your hosting
   - Point ismailakhtar.com domain

3. **Enable Email**
   - Set up SendGrid or Mailgun account
   - Add API keys to `.env.local`
   - Update contact API route

4. **Add Real Blog Articles**
   - Create individual blog post pages
   - Add content for each article

5. **Update Portfolio**
   - Add project images
   - Write detailed case studies
   - Update project links

## 📞 Support

For questions:
- Email: ismailakhtar786@gmail.com
- Phone: +91-7020315520

---

**Version**: 1.0.0
**Last Updated**: May 2024
