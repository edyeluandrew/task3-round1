import { Link } from 'react-router-dom';
import { Target, Zap, Code, Trophy, Globe, Star, ArrowRight } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Expert-Led Content',
      description: 'Learn from industry professionals with real-world experience and practical insights.',
    },
    {
      icon: Zap,
      title: 'Learn at Your Pace',
      description: 'Access courses anytime, anywhere. Learn on your schedule without any pressure.',
    },
    {
      icon: Code,
      title: 'Hands-On Projects',
      description: 'Build real projects and portfolio pieces while learning practical skills.',
    },
    {
      icon: Trophy,
      title: 'Certificates',
      description: 'Earn recognized certificates to showcase your skills to employers.',
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners worldwide, share knowledge, and grow together.',
    },
    {
      icon: Star,
      title: 'Lifetime Access',
      description: 'Get permanent access to course materials and future updates.',
    },
  ];

  const stats = [
    { number: '50k+', label: 'Students Worldwide' },
    { number: '200+', label: 'Expert Courses' },
    { number: '4.8★', label: 'Average Rating' },
    { number: '95%', label: 'Completion Rate' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-dark-surface via-dark-bg to-dark-surface border-b border-dark-border overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-primary-base/10 rounded-full blur-3xl -top-40 -right-40 opacity-60"></div>
          <div className="absolute w-[400px] h-[400px] bg-primary-base/5 rounded-full blur-3xl -bottom-48 -left-48 opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text-light mb-6">
            About <span className="text-primary-base">Fluent</span>
          </h1>
          <p className="text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-8">
            We're on a mission to make world-class education accessible to everyone, everywhere.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover group"
          >
            Explore Our Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
                Our Story
              </h2>
              <p className="text-lg text-text-muted mb-4 leading-relaxed">
                Fluent was born from a simple belief: quality education should not be limited by geography, economics, or background. We started as a small team of educators and technologists passionate about democratizing learning.
              </p>
              <p className="text-lg text-text-muted mb-4 leading-relaxed">
                Today, Fluent has grown into a vibrant community of thousands of learners and instructors collaborating to build skills that matter in the modern world.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                We're committed to delivering exceptional learning experiences through cutting-edge technology, expert instructors, and a supportive community that celebrates each learner's journey.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-dark-border to-dark-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-base/20 to-accent/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe size={80} className="text-primary-base mb-4 mx-auto opacity-50" />
                  <p className="text-text-light font-semibold">Global Learning Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-dark-surface border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text-light text-center mb-16">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-dark-card border border-dark-border rounded-lg p-8 text-center hover:border-primary-base/50 transition-premium">
                <div className="text-4xl font-bold text-primary-base mb-2">{stat.number}</div>
                <p className="text-text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
              Why Choose Fluent?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              We're committed to providing the best learning experience with features designed for professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-lg bg-dark-card border border-dark-border hover:border-primary-base hover:bg-dark-surface transition-premium group"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-base to-primary-hover flex items-center justify-center mb-4 group-hover:shadow-hover transition-premium">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-light mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-dark-surface via-dark-bg to-dark-surface border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-8">
            Join Our Community
          </h2>
          <p className="text-xl text-text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
            Start learning from industry experts, build real projects, and transform your career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover group"
            >
              Explore Courses
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-dark-border hover:border-primary-base text-text-light rounded-lg font-semibold transition-premium"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
