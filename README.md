# Arogya Sharma - Portfolio Website

A modern, fully responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, experience, and projects in a way that recruiters and potential clients love.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Performance Optimized**: Fast loading times with code splitting and optimized images
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG-compliant with proper ARIA roles and alt text
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct download link for PDF resume

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Theme**: Next Themes
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── BackToTop.tsx      # Back to top button
│   ├── Contact.tsx        # Contact form
│   ├── Experience.tsx     # Experience timeline
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── LoadingScreen.tsx  # Loading animation
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills section
│   └── ThemeProvider.tsx  # Theme context
└── data/
    └── portfolio.ts       # Portfolio data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arogyasharma/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Edit `src/data/portfolio.ts` to update:
- Personal details (name, email, location)
- Skills and technologies
- Project information
- Work experience
- Education details
- Social media links

### Styling

The website uses Tailwind CSS for styling. Key customization points:

- **Colors**: Update the color palette in `tailwind.config.js`
- **Fonts**: Modify font families in the config
- **Animations**: Custom animations are defined in `globals.css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Intersection Observer for animations
- **Bundle Analysis**: Use `npm run build` to analyze

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Other Platforms

The built files are in the `.next` folder and can be deployed to:
- Netlify
- AWS Amplify
- GitHub Pages (with static export)
- Any hosting service that supports Node.js

## 📊 SEO & Analytics

### Built-in SEO Features

- Meta tags for social sharing
- Structured data markup
- Semantic HTML structure
- Optimized images with alt text
- Fast loading times

### Adding Analytics

To add Google Analytics:

1. Install the package:
   ```bash
   npm install @next/third-parties
   ```

2. Add to your layout:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>{children}</body>
         <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
       </html>
     )
   }
   ```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check Node.js version (18+)
2. **Styling Issues**: Clear `.next` folder and rebuild
3. **Animation Problems**: Ensure Framer Motion is properly installed

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Open an issue on GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/arogyasharma/portfolio/issues).

## 📞 Contact

**Arogya Sharma**
- Email: arogyasharma10@gmail.com
- LinkedIn: [arogya-sharma-b029021a9](http://www.linkedin.com/in/arogya-sharma-b029021a9)
- GitHub: [@arogyasharma](https://github.com/arogyasharma)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!