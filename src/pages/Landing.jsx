import Hero from '../components/Hero';
import AppIntro from '../components/AppIntro';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Landing() {
  // Show only first 3 courses as featured
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <Hero />

      {/* Featured Courses Preview */}
      <section className="py-20 md:py-32 bg-dark-surface border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto font-medium">
              Explore our handpicked selection of top-rated courses to kickstart your learning journey.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Browse All CTA */}
          <div className="text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover group"
            >
              View All Courses
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* App Intro Section */}
      <AppIntro />
    </div>
  );
}
