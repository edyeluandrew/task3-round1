import Hero from '../components/Hero';
import AppIntro from '../components/AppIntro';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';

export default function Landing() {
  // Show only first 3 courses as featured
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Courses Preview */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              View All Courses
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* App Intro Section */}
      <AppIntro />
    </div>
  );
}
