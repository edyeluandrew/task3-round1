import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Course Not Found</h1>
          <p className="text-slate-600 mb-8 text-lg">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
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
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Category Badge */}
        <div className="absolute top-8 left-8">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-bold rounded-full">
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {course.title}
            </h1>

            {/* Rating and Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{course.rating}</div>
                  <div className="text-sm text-slate-600">Course Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">👥</span>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {(course.enrollments / 1000).toFixed(1)}k
                  </div>
                  <div className="text-sm text-slate-600">Enrolled Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">⏱️</span>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{course.duration}h</div>
                  <div className="text-sm text-slate-600">Total Duration</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Course</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Course Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Master core concepts and best practices',
                  'Build real-world projects from scratch',
                  'Get hands-on with industry tools',
                  'Earn a recognized certificate',
                  'Access lifetime course materials',
                  'Join a supportive community',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="text-blue-600 text-2xl mt-1">✓</div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Prerequisites</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">•</span>
                  Basic computer literacy and internet connection
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">•</span>
                  Willingness to practice and build projects
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">•</span>
                  3-5 hours per week for the course duration
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">•</span>
                  No prior programming experience needed
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Course Card */}
            <div className="sticky top-24 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 shadow-lg">
              {/* Price */}
              <div className="mb-8 pb-8 border-b border-slate-300">
                <div className="text-sm text-slate-600 mb-2">Price</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  ${course.price}
                </div>
                <div className="text-xs text-slate-500">
                  One-time payment. Lifetime access.
                </div>
              </div>

              {/* Key Details */}
              <div className="space-y-4 mb-8 pb-8 border-b border-slate-300">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <div className="text-xs text-slate-600">Duration</div>
                    <div className="font-semibold text-slate-900">{course.duration} hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <div className="text-xs text-slate-600">Category</div>
                    <div className="font-semibold text-slate-900">{course.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="text-xs text-slate-600">Certificate</div>
                    <div className="font-semibold text-slate-900">Included</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl transition-all mb-3 text-lg scale-105 active:scale-100">
                Enroll Now
              </button>
              <button className="w-full px-6 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                Add to Wishlist
              </button>

              {/* Course Features */}
              <div className="mt-8 pt-8 border-t border-slate-300 space-y-3">
                <h4 className="font-bold text-slate-900 mb-4">Included in this course</h4>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile-friendly lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30-day money-back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <Link key={relatedCourse.id} to={`/course/${relatedCourse.id}`}>
                  <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <div className="relative h-40 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedCourse.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-blue-600">
                          ${relatedCourse.price}
                        </span>
                        <span className="text-sm">⭐ {relatedCourse.rating}</span>
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
