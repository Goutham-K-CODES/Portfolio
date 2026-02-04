# 🎨 Code Meets Creativity - Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-cyan?style=for-the-badge&logo=tailwindcss)

### 🌐 [**Live Demo**](https://portfolio-99s5r00ps-gouthams-projects-f3f15f60.vercel.app) 🚀

*A modern, dual-personality portfolio showcasing both Developer and Designer perspectives*

</div>

---

## ✨ Features

### 🎯 Unique Split-Screen Design
- **Developer Side** - Dark theme with code-style aesthetics and terminal effects
- **Designer Side** - Light theme with creative, artistic elements and smooth animations
- **Mobile Toggle** - Seamless switching between views on mobile devices

### 📱 Mobile-First Experience
- Responsive design that adapts perfectly to all screen sizes
- Dedicated mobile toggle for switching between Developer and Designer views
- Synchronized state across all sections

### 🛠️ Key Functionalities
- ✅ **Resume Download** - One-click PDF download
- ✅ **EmailJS Integration** - Working contact form with email notifications
- ✅ **Star Rating System** - Visual skill representation (5-star scale)
- ✅ **Smooth Animations** - Floating particles, gradient effects, and transitions
- ✅ **Interactive Projects** - Live demos and GitHub links for each project
- ✅ **Social Links** - Direct links to GitHub, LinkedIn, and Email

---

## 🚀 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | TailwindCSS, Custom CSS |
| **UI Components** | Shadcn/ui |
| **Form Handling** | EmailJS |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

```sh
# Clone the repository
git clone https://github.com/Goutham-K-CODES/Portfolio.git

# Navigate to project directory
cd Portfolio/code-meets-creativity-main

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🎨 Project Structure

```
Portfolio/
├── public/
│   └── K.Goutham resume.pdf
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Landing section
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Skills with star ratings
│   │   ├── Projects.tsx       # Project showcase
│   │   ├── Contact.tsx        # Contact form
│   │   ├── MobileToggle.tsx   # Mobile view switcher
│   │   └── ui/                # Shadcn components
│   ├── contexts/
│   │   └── MobileViewContext.tsx  # Shared state
│   ├── assets/
│   │   └── profile.jpg        # Profile photo
│   └── App.tsx
├── package.json
└── README.md
```

---

## 🌟 Key Sections

### 1. **Hero Section**
- Animated terminal text
- Download resume button
- Inspirational quote

### 2. **About Section**
- Profile photo with hover effects
- Bio and skills overview
- Feature cards (Clean Code, UI/UX, Fast & Efficient, User-Centric)

### 3. **Skills Section**
- **Developer**: Star rating system (React, Flask, MongoDB, Java)
- **Designer**: Percentage-based progress bars (Figma, UI/UX, Prototyping, Canva)

### 4. **Projects Section**
- **Developer Projects**: FreshFares, To-Do List, IEEE Website
- **Designer Projects**: Figma designs with live previews
- GitHub links and live demos

### 5. **Contact Section**
- Working contact form with EmailJS
- Social media links
- Form validation and error handling

---

## 📧 EmailJS Configuration

The contact form uses EmailJS for email delivery. Configuration details:
- Service ID: `service_8yda8th`
- Template ID: `template_he5thhe`
- Recipient: `k08753568@gmail.com`

---

## 🎯 Mobile Features

- **Toggle Button**: Switches between Developer and Designer views
- **Fixed Position**: Follows user while scrolling
- **Smooth Transitions**: 500ms animation between views
- **Synchronized State**: All sections switch together

---

## 🚀 Deployment

This project is deployed on **Vercel** with automatic deployments enabled.

### Live URL
🔗 [https://portfolio-99s5r00ps-gouthams-projects-f3f15f60.vercel.app](https://portfolio-99s5r00ps-gouthams-projects-f3f15f60.vercel.app)

### Deploy Your Own
```sh
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Goutham K**
- 🌐 Portfolio: [Live Demo](https://portfolio-99s5r00ps-gouthams-projects-f3f15f60.vercel.app)
- 💼 GitHub: [@Goutham-K-CODES](https://github.com/Goutham-K-CODES)
- 📧 Email: goutham090205@gmail.com
- 💼 LinkedIn: [Goutham K](https://www.linkedin.com/in/goutham-k-693695254)

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

Made with ❤️ by Goutham K

</div>
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/62526ec0-a575-46e1-b90a-4af5696813af) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
