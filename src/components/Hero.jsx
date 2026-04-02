import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'Web Development Course'
    },
    {
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=600&fit=crop',
      alt: 'Design Learning'
    },
    {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      alt: 'Programming Skills'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark-bg/70"></div>
      </div>

      {/* Animated accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-base/10 rounded-full blur-3xl -top-40 -right-40 opacity-60"></div>
        <div className="absolute w-[400px] h-[400px] bg-primary-base/5 rounded-full blur-3xl -bottom-48 -left-48 opacity-40"></div>
        <div className="absolute w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl top-1/3 right-1/3 opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="mb-8 inline-block animate-fade-in">
          {/* <span className="inline-flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border hover:border-primary-base rounded-full text-sm font-semibold text-text-light transition-premium">
            <Zap size={16} className="text-accent" />
            Premium learning experience
          </span> */}
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-text-light mb-6 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Master Your{' '}
          <span className="text-primary-base font-display">Craft</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Learn industry-standard skills from expert instructors. Build real projects. Earn recognized certificates. Join thousands of professionals transforming their careers with Fluent.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/courses"
            className="group px-8 py-4 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover flex items-center justify-center gap-2"
          >
            Explore Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 border-2 border-dark-border hover:border-primary-base text-text-light rounded-lg font-semibold transition-premium hover:bg-dark-card">
            Learn More
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-dark-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
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

      {/* Carousel navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === activeSlide
                ? 'bg-primary-base w-8'
                : 'bg-text-muted/40 hover:bg-text-muted/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
