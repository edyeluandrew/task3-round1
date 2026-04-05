export const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Master the basics of React, including components, hooks, state management, and building reusable UI components. Perfect for beginners looking to start their frontend journey.",
    fullDescription: "Master the basics of React, including components, hooks, state management, and building reusable UI components. Perfect for beginners looking to start their frontend journey. You'll learn JSX, functional components, useState, useEffect, and how to structure React applications properly.",
    price: 49.99,
    duration: 24,
    rating: 4.8,
    enrollments: 12500,
    image: "https://images.unsplash.com/photo-1517694307202-14dd9538aa97?w=600&h=400&fit=crop&q=80",
    icon: '<circle cx="12" cy="12" r="2.5" fill="%2361dafb"/><path d="M12 6c3.5 0 6.8 1.3 9 3.3l1.5-2.2C17.8 4.4 15.1 3 12 3S6.2 4.4 3.5 6.1L5 8.3C7.2 7.3 10.5 6 12 6m0 12c-3.5 0-6.8-1.3-9-3.3l-1.5 2.2C6.2 19.6 8.9 21 12 21s5.8-1.4 8.5-3.1l-1.5-2.2c-2.2 2-5.5 3.3-9 3.3z" fill="%2361dafb"/>',
    category: "Web Development",
    learningPoints: [
      "Master React components and JSX syntax",
      "Work with React hooks: useState, useEffect, useContext",
      "Build real-world React applications",
      "Implement advanced state management patterns",
      "Optimize performance and debugging techniques",
      "Deploy React apps to production"
    ],
    prerequisites: [
      "Basic JavaScript knowledge (ES6+ concepts recommended)",
      "Understanding of HTML and CSS fundamentals",
      "Familiarity with web development concepts",
      "Node.js and npm installed on your machine"
    ],
    instructor: {
      name: "Sarah Chen",
      title: "React Specialist & Full Stack Developer",
      bio: "Senior developer with 8+ years of React experience at top tech companies."
    }
  },
  {
    id: 2,
    title: "Advanced Tailwind CSS",
    description: "Learn advanced Tailwind CSS techniques for building beautiful, responsive designs. Covers utilities, components, customization, and performance optimization.",
    fullDescription: "Learn advanced Tailwind CSS techniques for building beautiful, responsive designs. Covers utilities, components, customization, and performance optimization. Master responsive design, dark mode, animations, and how to extend Tailwind with custom plugins.",
    price: 39.99,
    duration: 18,
    rating: 4.9,
    enrollments: 8900,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
    learningPoints: [
      "Master utility-first CSS with Tailwind",
      "Build responsive designs for all screen sizes",
      "Create custom Tailwind components and plugins",
      "Implement dark mode and theme switching",
      "Optimize CSS bundle size and performance",
      "Design system best practices"
    ],
    prerequisites: [
      "Solid understanding of HTML and CSS",
      "Basic knowledge of JavaScript",
      "Familiarity with Node.js and npm",
      "Understanding of web design principles"
    ],
    instructor: {
      name: "Marcus Rivera",
      title: "UI/UX Developer & Design Systems Lead",
      bio: "Expert in design systems with experience at leading design-first companies."
    }
  },
  {
    id: 3,
    title: "Full Stack JavaScript",
    description: "Build complete web applications from frontend to backend using JavaScript. Learn Node.js, Express, databases, and deployment in one comprehensive course.",
    fullDescription: "Build complete web applications from frontend to backend using JavaScript. Learn Node.js, Express, databases, and deployment in one comprehensive course. Create real-world projects and understand the full web development lifecycle.",
    price: 79.99,
    duration: 48,
    rating: 4.7,
    enrollments: 15200,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=80",
    icon: '<rect x="2" y="2" width="20" height="20" rx="2" ry="2" fill="none" stroke="%2306b6d4" stroke-width="1.5"/><path d="M7 12h10M7 7h10M7 17h10" stroke="%2306b6d4" stroke-width="1.5" stroke-linecap="round"/>',
    category: "Web Design",
    learningPoints: [
      "Build complete web applications with JavaScript",
      "Master Node.js and Express server development",
      "Work with MongoDB and databases",
      "Implement authentication and authorization",
      "Deploy applications to cloud platforms",
      "API development and RESTful design patterns"
    ],
    prerequisites: [
      "Strong JavaScript fundamentals",
      "Understanding of web architecture",
      "Basic database concepts",
      "Comfortable with terminal/command line"
    ],
    instructor: {
      name: "Alex Thompson",
      title: "Full Stack Engineer & DevOps Specialist",
      bio: "10+ years building scalable web applications at Fortune 500 companies."
    }
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description: "Create native mobile applications using React. Learn how to leverage your React skills to build iOS and Android apps efficiently.",
    fullDescription: "Create native mobile applications using React. Learn how to leverage your React skills to build iOS and Android apps efficiently. Master React Native components, navigation, APIs, and deployment to app stores.",
    price: 69.99,
    duration: 36,
    rating: 4.6,
    enrollments: 7300,
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=400&fit=crop&q=80",
    icon: '<rect x="3" y="2" width="18" height="20" rx="2" ry="2" fill="none" stroke="%2361dafb" stroke-width="1.5"/><circle cx="9" cy="10" r="1.5" fill="%2361dafb"/><circle cx="15" cy="10" r="1.5" fill="%2361dafb"/><path d="M9 15c0-1.5.5-2 3-2s3.5.5 3.5 2" fill="none" stroke="%2361dafb" stroke-width="1.5" stroke-linecap="round"/>',
    category: "Mobile Development",
    learningPoints: [
      "Build native iOS and Android apps with React",
      "Master React Native components and APIs",
      "Implement navigation and routing",
      "Work with native device features and permissions",
      "Deploy to Apple App Store and Google Play",
      "Performance optimization for mobile platforms"
    ],
    prerequisites: [
      "Solid React knowledge required",
      "JavaScript ES6+ proficiency",
      "Understanding of mobile app concepts",
      "Node.js and React Native CLI installed"
    ],
    instructor: {
      name: "Priya Patel",
      title: "Mobile App Developer & React Native Expert",
      bio: "Launched 20+ mobile apps on iOS and Android with millions of downloads."
    }
  },
  {
    id: 5,
    title: "TypeScript for Developers",
    description: "Level up your JavaScript skills with TypeScript. Learn type safety, interfaces, generics, and best practices for large-scale applications.",
    fullDescription: "Level up your JavaScript skills with TypeScript. Learn type safety, interfaces, generics, and best practices for large-scale applications. Write more reliable and maintainable code with static typing.",
    price: 44.99,
    duration: 20,
    rating: 4.8,
    enrollments: 9800,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=80",
    icon: '<rect x="2" y="2" width="20" height="20" fill="%233178c6" rx="2"/><text x="12" y="16" font-size="12" font-weight="bold" fill="white" text-anchor="middle">TS</text>',
    category: "Web Development",
    learningPoints: [
      "Master TypeScript types, interfaces, and generics",
      "Migrate JavaScript projects to TypeScript",
      "Work with decorators and advanced types",
      "Build type-safe React and Node applications",
      "Debug and troubleshoot TypeScript issues",
      "Best practices for enterprise TypeScript projects"
    ],
    prerequisites: [
      "Intermediate JavaScript knowledge",
      "Understanding of OOP principles",
      "Familiarity with modern tooling (webpack, npm)",
      "Basic knowledge of a framework (React, Node.js, etc.)"
    ],
    instructor: {
      name: "David Kim",
      title: "TypeScript Expert & Architecture Lead",
      bio: "Led TypeScript migrations for teams at major tech companies."
    }
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    description: "Optimize your web applications for speed and efficiency. Learn about lazy loading, code splitting, caching, and performance monitoring.",
    fullDescription: "Optimize your web applications for speed and efficiency. Learn about lazy loading, code splitting, caching, and performance monitoring. Improve Core Web Vitals and user experience with practical optimization techniques.",
    price: 59.99,
    duration: 28,
    rating: 4.9,
    enrollments: 5600,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
    icon: '<path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="%23fbbf24"/><polyline points="13 3 13 8 19 8" fill="%23fbbf24"/><path d="M12 18v-3m-3-2v5m6-3v4" stroke="%23fbbf24" stroke-width="1" stroke-linecap="round" fill="none"/>',
    category: "Web Development",
    learningPoints: [
      "Measure and analyze web performance metrics",
      "Implement lazy loading and code splitting",
      "Optimize images and assets for the web",
      "Master caching strategies and CDNs",
      "Improve Core Web Vitals scores",
      "Monitor performance in production environments"
    ],
    prerequisites: [
      "Understanding of web development fundamentals",
      "Familiarity with browser DevTools",
      "Basic knowledge of HTTP and networking",
      "Experience with at least one web framework"
    ],
    instructor: {
      name: "Elena Volkova",
      title: "Performance Engineer & Web Optimization Specialist",
      bio: "Optimized apps serving millions of users; expert in Core Web Vitals."
    }
  },
  {
    id: 7,
    title: "UI/UX Design Principles",
    description: "Master the fundamentals of user interface and user experience design. Create engaging digital products that users love.",
    fullDescription: "Master the fundamentals of user interface and user experience design. Create engaging digital products that users love. Learn design thinking, wireframing, prototyping, and user testing methodologies.",
    price: 54.99,
    duration: 30,
    rating: 4.7,
    enrollments: 11200,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
    icon: '<circle cx="12" cy="12" r="9" fill="none" stroke="%239d5bd2" stroke-width="1.5"/><path d="M12 7v5l4 2.5" stroke="%239d5bd2" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    category: "Web Design",
    learningPoints: [
      "Master design thinking and user research",
      "Create wireframes and prototypes",
      "Implement design best practices and patterns",
      "Build design systems and component libraries",
      "Conduct user testing and iterate designs",
      "Collaboration between design and development teams"
    ],
    prerequisites: [
      "Basic design software knowledge (Figma recommended)",
      "Understanding of web and mobile platforms",
      "Communication and collaboration skills",
      "Interest in user psychology and behavior"
    ],
    instructor: {
      name: "Jessica Wong",
      title: "Lead UX Designer & Design Systems Architect",
      bio: "Designed interfaces for platforms used by millions; design systems expert."
    }
  },
  {
    id: 8,
    title: "Next.js & Vercel Deployment",
    description: "Build production-ready applications with Next.js. Learn SSR, SSG, API routes, and deploying to Vercel for optimal performance.",
    fullDescription: "Build production-ready applications with Next.js. Learn SSR, SSG, API routes, and deploying to Vercel for optimal performance. Master advanced Next.js features and deployment best practices.",
    price: 74.99,
    duration: 42,
    rating: 4.8,
    enrollments: 13400,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=80",
    icon: '<circle cx="12" cy="12" r="10" fill="none" stroke="black" stroke-width="2"/><path d="M12 7v5l3.5 2" stroke="black" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    category: "Web Development",
    learningPoints: [
      "Master Next.js framework and React integration",
      "Implement Server-Side Rendering (SSR) and Static Generation (SSG)",
      "Build API routes and backend functionality",
      "Optimize images and performance with Next.js",
      "Deploy applications to Vercel and other platforms",
      "Advanced features: middleware, ISR, and edge functions"
    ],
    prerequisites: [
      "Strong React fundamentals required",
      "JavaScript and Node.js knowledge",
      "Understanding of web deployment concepts",
      "Experience with version control (Git)"
    ],
    instructor: {
      name: "James Morrison",
      title: "Next.js Expert & Senior Full Stack Developer",
      bio: "Built and deployed 50+ Next.js applications; Vercel certified instructor."
    }
  },
];
