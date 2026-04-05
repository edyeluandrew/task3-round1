import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-primary-base/10 rounded-full blur-3xl -top-40 -right-40 opacity-60"></div>
          <div className="absolute w-[400px] h-[400px] bg-primary-base/5 rounded-full blur-3xl -bottom-48 -left-48 opacity-40"></div>
        </div>

        <div className="text-center max-w-md relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-dark-card border border-dark-border rounded-full">
              <CheckCircle size={64} className="text-primary-base" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-text-light mb-4">Welcome to Fluent!</h1>
          <p className="text-xl text-text-muted mb-8">
            Your account has been created successfully. You're ready to start learning and mastering new skills.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover group"
          >
            Explore Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-base/10 rounded-full blur-3xl -top-40 -right-40 opacity-60"></div>
        <div className="absolute w-[400px] h-[400px] bg-primary-base/5 rounded-full blur-3xl -bottom-48 -left-48 opacity-40"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 shadow-card">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-text-light mb-2">Create Account</h1>
            <p className="text-text-muted">
              Join thousands of professionals leveling up their skills with Fluent.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 bg-dark-bg border border-dark-border text-text-light placeholder-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-premium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-dark-bg border border-dark-border text-text-light placeholder-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-premium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="At least 8 characters"
                  className="w-full pl-10 pr-4 py-2.5 bg-dark-bg border border-dark-border text-text-light placeholder-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-premium"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">Confirm Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-2.5 bg-dark-bg border border-dark-border text-text-light placeholder-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-premium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-base hover:bg-primary-hover text-white font-semibold rounded-lg transition-premium shadow-card hover:shadow-hover mt-6"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-text-muted text-center mb-6">
            By signing up, you agree to our{' '}
            <a href="#" className="text-primary-base hover:text-primary-hover transition-colors font-semibold">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary-base hover:text-primary-hover transition-colors font-semibold">
              Privacy Policy
            </a>
          </p>

          <p className="text-center text-text-muted">
            Already have an account?{' '}
            <a href="#" className="text-primary-base hover:text-primary-hover font-semibold transition-colors">
              Sign in
            </a>
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-dark-card border border-dark-border rounded-lg hover:border-primary-base/50 transition-premium">
            <h3 className="text-text-light font-semibold mb-2">Expert Instructors</h3>
            <p className="text-sm text-text-muted">Learn from industry leaders</p>
          </div>
          <div className="p-4 bg-dark-card border border-dark-border rounded-lg hover:border-primary-base/50 transition-premium">
            <h3 className="text-text-light font-semibold mb-2">Lifetime Access</h3>
            <p className="text-sm text-text-muted">Access all course materials</p>
          </div>
          <div className="p-4 bg-dark-card border border-dark-border rounded-lg hover:border-primary-base/50 transition-premium">
            <h3 className="text-text-light font-semibold mb-2">Certificates</h3>
            <p className="text-sm text-text-muted">Earn recognized credentials</p>
          </div>
        </div>
      </div>
    </div>
  );
}
