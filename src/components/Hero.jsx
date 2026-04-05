import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-dark-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-base/10 rounded-full blur-3xl -top-40 -right-40 opacity-60"></div>
        <div className="absolute w-[400px] h-[400px] bg-primary-base/5 rounded-full blur-3xl -bottom-48 -left-48 opacity-40"></div>
        <div className="absolute w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl top-1/3 right-1/3 opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 w-full">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-text-light mb-6 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Master Your{' '}
          <span className="text-primary-base">Craft</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Learn industry-standard skills from expert instructors. Build real projects. Earn recognized certificates. Join thousands of professionals transforming their careers with Fluent.
        </p>

        {/* Hero Visual Block */}
        <div className="my-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative h-96 rounded-3xl overflow-hidden border border-primary-base/30 shadow-2xl bg-gradient-to-br from-dark-surface via-dark-card to-dark-bg">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-base" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" className="animate-pulse" />
              </svg>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent"></div>

            {/* Centered accent line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-base to-transparent opacity-50"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/courses"
            className="group px-8 py-4 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover flex items-center justify-center gap-2"
          >
            Explore Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 border-2 border-dark-border hover:border-primary-base text-text-light rounded-lg font-semibold transition-premium hover:bg-dark-card"
          >
            Learn More
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-dark-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="group">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-4xl font-bold text-primary-base">8+</span>
              <Award size={28} className="text-accent" />
            </div>
            <p className="text-text-muted font-medium">Expert Courses</p>
          </div>
          <div className="group">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-4xl font-bold text-primary-base">50k+</span>
              <Users size={28} className="text-accent" />
            </div>
            <p className="text-text-muted font-medium">Active Learners</p>
          </div>
          <div className="group">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-4xl font-bold text-primary-base">4.8★</span>
              <Zap size={28} className="text-accent" />
            </div>
            <p className="text-text-muted font-medium">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
