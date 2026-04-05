import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-base to-primary-hover rounded-lg flex items-center justify-center text-white font-display text-lg font-bold group-hover:shadow-hover transition-premium">
              F
            </div>
            <span className="text-xl font-display font-bold text-text-light tracking-wide">FLUENT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-premium font-medium text-sm ${
                isActive('/') 
                  ? 'text-primary-base font-semibold' 
                  : 'text-text-muted hover:text-text-light'
              }`}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={`transition-premium font-medium text-sm ${
                isActive('/courses') 
                  ? 'text-primary-base font-semibold' 
                  : 'text-text-muted hover:text-text-light'
              }`}
            >
              Courses
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2.5 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-md hover:shadow-hover"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-light hover:bg-dark-card rounded-lg transition-premium"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-dark-border pt-4 animate-fade-in">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg mb-2 transition-premium font-medium ${
                isActive('/') 
                  ? 'bg-dark-card text-primary-base' 
                  : 'text-text-muted hover:text-text-light hover:bg-dark-card'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={`block px-4 py-2 rounded-lg mb-2 transition-premium font-medium ${
                isActive('/courses') 
                  ? 'bg-dark-card text-primary-base' 
                  : 'text-text-muted hover:text-text-light hover:bg-dark-card'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/signup"
              className="w-full px-4 py-2.5 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold mt-4 transition-premium block text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
