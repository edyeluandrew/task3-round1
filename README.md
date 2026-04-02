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

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd task3
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
│   └── CourseDetail.jsx    # Individual course detail page
├── data/
│   └── courses.js          # Mock course data (8 courses)
├── App.jsx                 # Main app with routing setup
├── main.jsx                # React entry point
├── index.css               # Tailwind CSS with custom utilities
├── App.css                 # Component-specific styles (legacy)
└── vite.config.js          # Vite configuration

public/
├── index.html              # HTML template
└── ...

tailwind.config.js          # Tailwind CSS configuration
postcss.config.js           # PostCSS configuration
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
- **Primary**: #0ea5e9 (Sky Blue)
- **Primary Dark**: #0284c7
- **Primary Darker**: #0369a1
- **Slate Grays**: Various shades for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, hierarchical sizing
- **Body**: Regular weight, clear readability

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

