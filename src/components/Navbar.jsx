import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              className="text-text-muted hover:text-text-light transition-premium font-medium text-sm"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-text-muted hover:text-text-light transition-premium font-medium text-sm"
            >
              Courses
            </Link>
            <button className="px-6 py-2.5 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-md hover:shadow-hover">
              Sign Up
            </button>
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
              className="block px-4 py-2 text-text-muted hover:text-text-light hover:bg-dark-card rounded-lg mb-2 transition-premium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block px-4 py-2 text-text-muted hover:text-text-light hover:bg-dark-card rounded-lg mb-2 transition-premium"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <button className="w-full px-4 py-2.5 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold mt-4 transition-premium">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
