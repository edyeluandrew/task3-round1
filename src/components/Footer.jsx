import { Link } from 'react-router-dom';
import { Mail, Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-base to-primary-hover rounded-lg flex items-center justify-center text-white font-display text-lg font-bold">
                F
              </div>
              <span className="text-xl font-display font-bold text-text-light">FLUENT</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Premium online learning platform designed for professionals building their future.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 hover:bg-dark-card rounded-lg transition-premium text-text-muted hover:text-primary-base" title="GitHub">
                <Share2 size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-dark-card rounded-lg transition-premium text-text-muted hover:text-primary-base" title="Twitter">
                <Globe size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-dark-card rounded-lg transition-premium text-text-muted hover:text-primary-base" title="LinkedIn">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-light font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-text-muted hover:text-primary-base transition-premium">Home</Link></li>
              <li><Link to="/courses" className="text-text-muted hover:text-primary-base transition-premium">Courses</Link></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Features</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-text-light font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Help Center</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Contact</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">FAQ</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-text-light font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Privacy</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Terms</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">Cookies</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary-base transition-premium">License</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © 2026 Fluent. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Mail size={16} />
              <a href="mailto:hello@fluent.dev" className="hover:text-primary-base transition-premium">hello@fluent.dev</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
