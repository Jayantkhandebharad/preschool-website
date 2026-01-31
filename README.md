# Nyanarth Gurukkulam - Premium Preschool Website

A beautiful, responsive website for Nyanarth Gurukkulam preschool, built with Next.js 14, Tailwind CSS, and Framer Motion. Features a warm, parent-to-parent tone with excellent UX design and smooth animations.

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with custom color palette (Royal Blue & Orchid)
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Built with Next.js 14 and optimized for speed
- **🎭 Smooth Animations**: Framer Motion for delightful micro-interactions
- **♿ Accessible**: Built with accessibility best practices
- **🎯 SEO Optimized**: Meta tags and structured data for search engines

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter & Poppins fonts
- **Images**: Next.js Image optimization with Unsplash placeholder images

## 📄 Pages

1. **Home** - Hero section with school overview and statistics
2. **About** - Founder's story and Gurukkulam philosophy
3. **Programs** - Interactive cards for Nursery, KG1, and KG2 programs
4. **Blogs** - Article grid with parenting tips and educational content
5. **Gallery** - Masonry layout with image modal and filtering
6. **Contact** - Contact form and school information

## 🎨 Design Features

- **Persistent Header**: School branding with navigation and contact button
- **Persistent Footer**: Contact details, quick links, and social media
- **Floating Actions**: WhatsApp and Call buttons for mobile users
- **Custom Color Palette**: 
  - Royal Blue (#002366) for trust and headers
  - Orchid (#DA70D6) for accents and interactive elements
  - White for clean backgrounds
- **Smooth Animations**: Page transitions, hover effects, and scroll animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or download** the project files to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd nyanarth-gurukkulam
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
nyanarth-gurukkulam/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js 14 App Router
│   │   ├── about/         # About page
│   │   ├── blogs/         # Blogs page
│   │   ├── contact/       # Contact page
│   │   ├── gallery/       # Gallery page
│   │   ├── programs/      # Programs page
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   └── components/
│       └── layout/        # Layout components
│           ├── Header.tsx
│           ├── Footer.tsx
│           └── FloatingActions.tsx
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎭 Animation Features

The website includes smooth animations powered by Framer Motion:

- **Page Transitions**: Smooth entry animations for all sections
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states for buttons and cards
- **Mobile Gestures**: Touch-friendly interactions
- **Loading States**: Smooth transitions between different states

## 📱 Responsive Design

- **Mobile-First**: Designed for mobile and scaled up
- **Breakpoints**: Tailored for all screen sizes (sm, md, lg, xl, 2xl)
- **Touch-Friendly**: Large touch targets and gesture support
- **Performance**: Optimized images and lazy loading

## 🎨 Customization

### Colors

Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  'royal-blue': '#002366',
  'orchid': '#DA70D6',
  'light-orchid': '#E6A8E6',
  'dark-royal': '#001947',
}
```

### Typography

Fonts are configured in `src/app/layout.tsx` and `tailwind.config.js`. Current setup uses:
- **Inter** for body text
- **Poppins** for headings and display text

### Content

Update content directly in the component files:
- Contact information in `FloatingActions.tsx` and `Footer.tsx`
- School details throughout the page components
- Replace Unsplash placeholder images with actual school photos

## 📞 Contact Integration

The website includes several contact touchpoints:

1. **Header Contact Button**: Links to contact page
2. **Floating WhatsApp Button**: Bottom-right, opens WhatsApp with pre-filled message
3. **Floating Call Button**: Bottom-left, initiates phone call
4. **Footer Contact Info**: Complete contact details
5. **Contact Form**: Structured form for visit scheduling

### To Configure:

1. Update phone numbers in `FloatingActions.tsx`
2. Update contact details in `Footer.tsx` and `contact/page.tsx`
3. Set up form handling for the contact form

## 🖼️ Images

Currently uses Unsplash placeholder images. To use your own images:

1. Add images to the `public/` directory
2. Replace Unsplash URLs with local image paths
3. Ensure images are optimized for web (WebP recommended)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

The website is optimized for:
- **Core Web Vitals**: LCP, FID, CLS scores
- **SEO**: Meta tags, structured data, semantic HTML
- **Accessibility**: WCAG 2.1 compliance
- **Mobile Performance**: Touch targets, loading optimization

## 🛠️ Development Tips

1. **Hot Reload**: Changes reflect instantly during development
2. **Component Structure**: Each page is a separate component for maintainability
3. **Styling**: Use Tailwind utility classes with custom components
4. **Animations**: Framer Motion components are wrapped for reusability
5. **Images**: Always use Next.js Image component for optimization

## 📝 License

This project is created for Nyanarth Gurukkulam. Please respect intellectual property rights when using this code.

## 💫 Support

For support with this website:
1. Check the component documentation
2. Review Tailwind CSS documentation
3. Consult Next.js documentation
4. Review Framer Motion guides

---

**Built with ❤️ for little dreamers and their families**