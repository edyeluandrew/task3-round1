# Fluent - Modern Online Learning Platform

A polished, responsive frontend for an online course platform built with React, Vite, and Tailwind CSS. Fluent provides a beautiful user experience for discovering, browsing, and learning from high-quality courses.

## 🎯 Project Overview

Fluent is a full-featured course discovery and learning platform frontend featuring:

- **Landing Page**: Hero section with call-to-action buttons and featured course previews
- **Course Listing Page**: Browse all courses with advanced search, filtering, and sorting capabilities
- **Course Detail Page**: Comprehensive course information with rich descriptions and enrollment options
- **Responsive Design**: Mobile-first, fully responsive across all device sizes
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Mock Data**: Pre-loaded with 8 realistic course examples

## ✨ Features

### Core Features
✅ Responsive navigation with mobile menu  
✅ Hero landing page with CTA buttons  
✅ Course grid with card-based layout  
✅ Real-time search functionality  
✅ Sort by price, rating, and popularity  
✅ Filter by category  
✅ Detailed course pages with full information  
✅ Related courses recommendations  
✅ Empty state handling for search results  

### Design Features
✅ Smooth page transitions and animations  
✅ Hover effects on interactive elements  
✅ Professional color palette and typography  
✅ Consistent spacing and layout  
✅ SVG icons and optimization  
✅ Gradient backgrounds and effects  
✅ Shadow depth and visual hierarchy  
✅ Mobile-optimized tap targets  

### Code Quality
✅ Component-based architecture  
✅ Reusable, modular components  
✅ Clean, readable code  
✅ Proper state management with React hooks  
✅ React Router for client-side navigation  
✅ Tailwind CSS for styling  
✅ Performance-optimized with memoization  
✅ SEO-friendly semantic HTML  

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **CSS Processing**: PostCSS with Autoprefixer
- **Package Manager**: npm
- **Node Version**: 14+

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-router-dom": "^6.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.1",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "vite": "^8.0.1"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- A code editor (VS Code recommended)
- Git (optional, for cloning)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/fluent.git
   cd fluent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with logo and menu
│   ├── Hero.jsx            # Landing page hero section
│   ├── AppIntro.jsx        # Features and why-choose-us section
│   ├── CourseCard.jsx      # Reusable course card component
│   ├── SearchFilterBar.jsx # Search, filter, and sort controls
│   └── Footer.jsx          # Footer with links
├── pages/
│   ├── Landing.jsx         # Home page (hero + featured courses)
│   ├── CoursesList.jsx     # Browse all courses page
│   ├── CourseDetail.jsx    # Individual course detail page
│   ├── SignUp.jsx          # User registration page
│   └── About.jsx           # About and features page
├── data/
│   └── courses.js          # Mock course data (8 courses with full details)
├── App.jsx                 # Main app with routing setup
├── main.jsx                # React entry point
├── index.css               # Global Tailwind CSS and custom styles
└── vite.config.js          # Vite build configuration

public/
├── index.html              # Main HTML template
└── ...

tailwind.config.js          # Tailwind CSS theme configuration
postcss.config.js           # PostCSS processing configuration
vercel.json                 # Vercel deployment configuration
package.json                # Project dependencies and scripts
package.json                # Dependencies and scripts
```

## 🎓 Course Data Structure

Each course object includes:

```javascript
{
  id: 1,
  title: "Course Title",
  description: "Short description",
  fullDescription: "Extended description",
  price: 49.99,
  duration: 24,          // in hours
  rating: 4.8,
  enrollments: 12500,
  image: "image-url",
  category: "Web Development"
}
```

## 🎨 Design System

### Color Palette
- **Primary**: #C62828 (Deep Red)
- **Primary Hover**: #E53935 (Light Red)
- **Background**: #0B0B0F (Deep Dark)
- **Surface**: #14141A (Card Background)
- **Border**: #2A2A35 (Subtle Border)
- **Text Light**: #F8F7F4 (Primary Text)
- **Text Muted**: #A1A1AA (Secondary Text)
- **Accent**: #F59E0B (Gold/Secondary)

### Typography
- **Display Font**: Bebas Neue (headings and branding)
- **Body Font**: Inter (content and UI text)
- **Headings**: Bold, hierarchical sizing with letter-spacing
- **Body**: Regular weight (400), excellent readability at all sizes

### Spacing & Layout
- **Max Width**: 1280px (7xl container)
- **Breakpoints**: Mobile, Tablet (md), Desktop (lg)
- **Grid Gaps**: 8px to 32px based on context

## 📱 Responsive Design

The app is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully with:
- Collapsible mobile navigation
- Flexible grid layouts
- Touch-optimized inputs and buttons

## 🚀 Deployment

### Vercel (Recommended)
Vercel is the creator of Next.js and provides excellent support for React + Vite applications.

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Your app will be live in ~1 minute

3. **Custom Domain**
   - After deployment, go to project settings
   - Add your custom domain in the "Domains" tab

### Netlify
Alternatively, you can deploy to Netlify:

1. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```

2. **Push to GitHub and deploy**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Netlify will auto-detect build settings
   - Your app will be live

### Live Demo
- **Demo URL**: https://YOUR_LIVE_URL (update after deployment)
- **Repository**: https://github.com/YOUR_USERNAME/fluent

## 📦 Libraries Used

### Core Dependencies
- **React** (^19.2.4) - UI framework
- **React DOM** (^19.2.4) - React rendering
- **React Router DOM** (^7.13.2) - Client-side routing

### Styling
- **Tailwind CSS** (^3.4.19) - Utility-first CSS framework
- **PostCSS** (^8.5.8) - CSS transformations
- **Autoprefixer** (^10.4.27) - Browser prefix automation

### Build & Dev Tools
- **Vite** (^8.0.1) - Lightning-fast build tool
- **@vitejs/plugin-react** (^6.0.1) - React support for Vite
- **ESLint** (^9.39.4) - Code quality and linting

### UI Components
- **Lucide React** (^1.7.0) - Beautiful icon library

All components adapt gracefully with:
- Touch-friendly buttons and inputs
- Optimized font sizes

## 🔧 Configuration

### Tailwind CSS
Customized Tailwind config includes:
- Extended color palette with primary colors
- Custom spacing utilities
- Safe area insets for mobile

### Vite
Configured for:
- Fast HMR (Hot Module Replacement)
- React plugin with Babel transpilation
- Optimized build output

## 📊 Mock Data

The app includes 8 realistic courses:
1. React Fundamentals
2. Advanced Tailwind CSS
3. Full Stack JavaScript
4. Mobile App Development with React Native
5. TypeScript for Developers
6. Web Performance Optimization
7. UI/UX Design Principles
8. Next.js & Vercel Deployment

Each course has sample data for ratings, prices, durations, and enrollments.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Connect repository**: Push to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo>
   git push -u origin main
   ```

2. **Create Vercel account** at [vercel.com](https://vercel.com)

3. **Import project**: Click "New Project" → Connect Git repository

4. **Deploy**: Vercel auto-detects Vite and deploys with zero-config

### Deploy to Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Option A: Drag & drop `dist` folder to [netlify.com/drop](https://www.netlify.com/drop)
   - Option B: Connect GitHub → Auto-rebuild on push

## 🚀 Performance Tips

- Lazy load images with modern formats
- Code splitting for routes (built-in with React Router)
- Minified CSS with Tailwind's production mode
- Optimized bundle size with tree-shaking
- Lighthouse score targets:
  - Performance: > 90
  - Accessibility: > 95
  - Best Practices: > 90
  - SEO: > 95

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Tailwind Not Compiling
```bash
# Rebuild Tailwind CSS
npm run build
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)

## 🤝 Contributing

This is an internship project. Feel free to:
- Add more courses to `src/data/courses.js`
- Customize colors in `tailwind.config.js`
- Extend features and components
- Improve responsive design
- Add animations and interactions

## 📄 License

This project is provided as-is for learning and portfolio purposes.

## 🎉 Features Coming Soon

- User authentication
- Course enrollment and progress tracking
- Student reviews and ratings
- Wishlist functionality
- Payment integration (Stripe)
- Admin dashboard
- Course video player
- Discussion forums
- Certificate generation

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

For questions or issues, please create a GitHub issue or contact the development team.

