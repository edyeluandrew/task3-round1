import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft, Clock, Users, Award, CheckCircle } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark-bg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-light mb-4">Course Not Found</h1>
          <p className="text-text-muted mb-8 text-lg">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover"
          >
            <ArrowLeft size={20} />
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // Related courses (excluding current)
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-base hover:text-primary-hover font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-br from-dark-border to-dark-surface overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <span className="px-4 py-2 bg-gradient-to-r from-primary-base to-primary-hover text-white text-base font-bold rounded-full">
            {course.category}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
              {course.title}
            </h1>

            {/* Rating and Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-dark-border">
              <div className="flex items-center gap-3">
                <Award size={32} className="text-accent" />
                <div>
                  <div className="text-2xl font-bold text-text-light">{course.rating}</div>
                  <div className="text-sm text-text-muted">Course Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={32} className="text-accent" />
                <div>
                  <div className="text-2xl font-bold text-text-light">
                    {(course.enrollments / 1000).toFixed(1)}k
                  </div>
                  <div className="text-sm text-text-muted">Enrolled Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={32} className="text-accent" />
                <div>
                  <div className="text-2xl font-bold text-text-light">{course.duration}h</div>
                  <div className="text-sm text-text-muted">Total Duration</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-text-light mb-4">About This Course</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Course Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-light mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-dark-card border border-dark-border rounded-lg hover:border-primary-base/50 transition-premium">
                    <CheckCircle size={24} className="text-primary-base flex-shrink-0 mt-1" />
                    <span className="text-text-light font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-light mb-4">Prerequisites</h2>
              <ul className="space-y-3 text-text-muted">
                {course.prerequisites.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-primary-base text-xl">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Section */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-text-light mb-6">Meet Your Instructor</h2>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-base to-primary-hover flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {course.instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-text-light">{course.instructor.name}</h3>
                  <p className="text-primary-base font-semibold mb-3">{course.instructor.title}</p>
                  <p className="text-text-muted leading-relaxed">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Course Card */}
            <div className="sticky top-24 bg-dark-card p-8 rounded-lg border border-dark-border shadow-card">
              {/* Price */}
              <div className="mb-8 pb-8 border-b border-dark-border">
                <div className="text-sm text-text-muted mb-2">Price</div>
                <div className="text-4xl font-bold text-primary-base mb-2">
                  ${course.price}
                </div>
                <div className="text-xs text-text-muted">
                  One-time payment. Lifetime access.
                </div>
              </div>

              {/* Key Details */}
              <div className="space-y-4 mb-8 pb-8 border-b border-dark-border">
                <div className="flex items-center gap-3">
                  <Clock size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="text-xs text-text-muted">Duration</div>
                    <div className="font-semibold text-text-light">{course.duration} hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="text-xs text-text-muted">Category</div>
                    <div className="font-semibold text-text-light">{course.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <div className="text-xs text-text-muted">Certificate</div>
                    <div className="font-semibold text-text-light">Included</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full px-6 py-4 bg-primary-base hover:bg-primary-hover text-white font-bold rounded-lg transition-premium shadow-card hover:shadow-hover mb-3">
                Enroll Now
              </button>
              <button className="w-full px-6 py-3 border-2 border-dark-border hover:border-primary-base text-text-light font-semibold rounded-lg transition-premium">
                Add to Wishlist
              </button>

              {/* Course Features */}
              <div className="mt-8 pt-8 border-t border-dark-border space-y-3">
                <h4 className="font-bold text-text-light mb-4">Included in this course</h4>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle size={18} className="text-primary-base flex-shrink-0" />
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle size={18} className="text-primary-base flex-shrink-0" />
                  <span>Mobile-friendly lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle size={18} className="text-primary-base flex-shrink-0" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle size={18} className="text-primary-base flex-shrink-0" />
                  <span>30-day money-back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <section className="bg-dark-surface border-t border-dark-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-light mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <Link key={relatedCourse.id} to={`/course/${relatedCourse.id}`}>
                  <div className="group bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-primary-base transition-premium h-full flex flex-col cursor-pointer">
                    <div className="relative h-40 bg-gradient-to-br from-dark-border to-dark-surface overflow-hidden">
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="font-bold text-text-light mb-2 group-hover:text-primary-base transition-colors line-clamp-2 flex-grow">
                        {relatedCourse.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary-base">
                          ${relatedCourse.price}
                        </span>
                        <span className="text-sm text-accent">⭐ {relatedCourse.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
