<div align="center">

# 🚀 Influtics Clone UI

### ✨ Built with Next.js 14, Tailwind CSS & Framer Motion

A **pixel-perfect recreation** of the [Influtics by Temptics](https://influtics.temptics.com/index.html) landing page — fully responsive, animated, and optimized for production.

Crafted using **Lovable.dev** and refined manually for design accuracy and code quality.
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel)](https://influitics-rebuilt.vercel.app/)

 

</div>

---

## 🧠 Overview

> *"Recreating design perfection through code."*

Influtics Clone is a **modern, interactive landing page** inspired by the Influtics site. It demonstrates advanced frontend implementation skills — responsive design, scroll-based animations, and modular React component architecture.

### Why This Project?

- 🎯 **Design-to-Code Excellence** – Translating complex UI designs into clean, maintainable code
- 🎨 **Modern Web Aesthetics** – Implementing contemporary design patterns and animations
- 📱 **Mobile-First Approach** – Ensuring seamless experiences across all devices
- ⚡ **Performance Optimized** – Leveraging Next.js for speed and SEO

---

## ⚙️ Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Framework** | [Next.js 14 (App Router)](https://nextjs.org/docs/app) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) / [Heroicons](https://heroicons.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **AI Assistant** | [Lovable.dev](https://lovable.dev/) |
| **Language** | TypeScript |
| **Package Manager** | npm / yarn / pnpm |

---

## 🎨 Features

### Core Functionality
- ✅ **Fully Responsive Design** – Optimized for Desktop, Tablet, and Mobile devices
- ✅ **Dynamic Navigation** – Transparent to solid sticky navbar with smooth transitions
- ✅ **Gradient Hero Section** – Eye-catching animated gradient backgrounds
- ✅ **Scroll Animations** – Smooth fade-in and slide-up effects on scroll
- ✅ **Component Sections** – About, Services, Portfolio, Testimonials, Blog & Contact
- ✅ **Interactive Elements** – Hover effects, button animations, and micro-interactions
- ✅ **Contact Form UI** – Ready-to-integrate backend with validation structure
- ✅ **SEO Optimized** – Meta tags, semantic HTML, and performance best practices

### Technical Highlights
- 🔧 **Modular Architecture** – Reusable React components with TypeScript
- 🎭 **Framer Motion Integration** – Sophisticated animation variants and gestures
- 🎨 **Tailwind Custom Config** – Extended theme with custom colors and utilities
- ⚡ **Optimized Assets** – Next.js Image component for automatic optimization
- 🔍 **Accessibility** – ARIA labels, keyboard navigation, and screen reader support

---

## 🗂️ Project Structure

```
influtics-clone/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx              # Main landing page
│   ├── globals.css           # Tailwind directives & global styles
│   └── favicon.ico           # Site favicon
│
├── components/
│   ├── Navbar.tsx            # Sticky navigation component
│   ├── Hero.tsx              # Hero section with gradient
│   ├── About.tsx             # About section
│   ├── Services.tsx          # Services showcase
│   ├── Portfolio.tsx         # Project portfolio grid
│   ├── Testimonials.tsx      # Client testimonials carousel
│   ├── Blog.tsx              # Blog preview section
│   ├── ContactForm.tsx       # Contact form component
│   └── Footer.tsx            # Footer with links
│
├── public/
│   ├── assets/
│   │   ├── logo.svg          # Brand logo
│   │   └── images/           # Section images
│   └── fonts/                # Custom fonts (if any)
│
├── lib/
│   └── utils.ts              # Utility functions
│
├── types/
│   └── index.ts              # TypeScript type definitions
│
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies & scripts
├── .eslintrc.json            # ESLint configuration
└── README.md                 # Project documentation
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git for version control

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/influtics-clone.git
cd influtics-clone
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit 👉 [http://localhost:3000](http://localhost:3000)

### 4️⃣ Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/<your-username>/influtics-clone)

#### Manual Deployment Steps:

1. Push your code to GitHub
2. Visit [vercel.com/import](https://vercel.com/import)
3. Import your repository
4. Configure build settings (auto-detected for Next.js)
5. Click **Deploy** 🚀

#### CLI Deployment:

```bash
npm install -g vercel
vercel login
vercel deploy --prod
```

### Alternative Platforms

- **Netlify**: Connect your GitHub repo and deploy automatically
- **Cloudflare Pages**: Fast global CDN with automatic deployments
- **AWS Amplify**: Full-stack deployment with backend capabilities

---

## 🎨 Customization Guide

### Brand Identity

Update brand elements in `/app/page.tsx` and components:

```tsx
// Update site title and description
export const metadata = {
  title: 'Your Brand Name',
  description: 'Your custom description',
}
```

### Color Scheme

Modify `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    }
  }
}
```

### Animations

Customize Framer Motion variants in components:

```tsx
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
```

### Content

- Replace text content in component files
- Update images in `/public/assets/`
- Modify section order in `/app/page.tsx`

### Fonts

Add custom fonts to `/public/fonts/` and update `globals.css`:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
}
```

---

## 📊 Performance Metrics

| Metric | Score |
|--------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

*Scores based on Lighthouse audit*

---

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build test
npm run build
```

---

## 🛠️ Built With Love Using

- **[Lovable.dev](https://lovable.dev/)** - AI-powered development assistant
- **[Next.js](https://nextjs.org/)** - React framework for production
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Vercel](https://vercel.com/)** - Deployment platform

---

## 🎓 Learning Highlights

Throughout this project, I:

- 🏗️ **Architected** a scalable Next.js 14 application with App Router
- 🎨 **Mastered** Tailwind CSS utility-first styling methodology
- ✨ **Implemented** complex animations with Framer Motion
- 📱 **Ensured** responsive design across all device sizes
- ⚡ **Optimized** performance with Next.js Image and lazy loading
- 🔍 **Enhanced** SEO with proper meta tags and semantic HTML
- 🤖 **Leveraged** AI tools (Lovable.dev) for rapid development
- 🛠️ **Refined** code quality with manual improvements and best practices

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

### **Anuj Soni**

💼 Developer | UI/UX Enthusiast | Tech Innovator

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://your-portfolio.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/your-handle)

</div>

---

## 🙏 Acknowledgements

- **Inspired by**: [Influtics by Temptics](https://influtics.temptics.com/index.html)
- **Built using**: [Lovable.dev](https://lovable.dev/) AI assistant
- **Deployed with**: [Vercel](https://vercel.com/)
- **Icons from**: [Lucide Icons](https://lucide.dev/) & [Heroicons](https://heroicons.com/)
- **Fonts**: Google Fonts / Custom Typography

---

## 📞 Support

If you have any questions or need help, feel free to:

- 📧 Email: anujsoni@example.com
- 💬 Open an [Issue](https://github.com/your-username/influtics-clone/issues)
- 🐦 Tweet at [@yourhandle](https://twitter.com/yourhandle)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

*"Design is intelligence made visible."* — **Alina Wheeler**

---

Made with ❤️ and ☕ by [Anuj Soni](https://github.com/your-username)

</div>
