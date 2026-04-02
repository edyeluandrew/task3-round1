import { Target, Zap, Code, Trophy, Globe, Star, ArrowRight } from 'lucide-react';

export default function AppIntro() {
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

  return (
    <section className="py-24 md:py-40 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Why Choose Fluent?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto font-medium">
            We're committed to providing the best learning experience with features designed for professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-lg bg-dark-card border border-dark-border hover:border-primary-base hover:bg-dark-surface transition-premium group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-base to-primary-hover flex items-center justify-center mb-4 group-hover:shadow-hover transition-premium">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-text-light mb-2 group-hover:text-primary-base transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="p-12 md:p-16 rounded-lg bg-gradient-to-r from-primary-base to-primary-hover text-center relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -right-48"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Career
            </h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of professionals learning with Fluent. Start your journey today.
            </p>
            <button className="px-8 py-3 bg-white text-primary-base rounded-lg font-semibold hover:bg-accent transition-premium shadow-card hover:shadow-hover flex items-center justify-center gap-2 mx-auto">
              Get Started Free
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
