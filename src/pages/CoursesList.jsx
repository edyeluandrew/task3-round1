import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import SearchFilterBar from '../components/SearchFilterBar';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

export default function CoursesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredAndSortedCourses = useMemo(() => {
    let result = [...courses];

    // Filter by search term
    if (searchTerm.trim()) {
      result = result.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (filterCategory) {
      result = result.filter((course) => course.category === filterCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        result.sort((a, b) => b.enrollments - a.enrollments);
        break;
      case 'featured':
      default:
        // Keep original order
        break;
    }

    return result;
  }, [searchTerm, sortBy, filterCategory]);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-dark-surface via-dark-card to-dark-surface border-b border-dark-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text-light mb-4">
            Explore All <span className="text-primary-base">Courses</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Discover {courses.length} expert-led courses across multiple categories. Find the perfect course to accelerate your learning.
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortBy={sortBy}
        onSortChange={setSortBy}
        filterCategory={filterCategory}
        onFilterChange={setFilterCategory}
      />

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredAndSortedCourses.length > 0 ? (
          <>
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-text-muted font-medium">
                Showing {filteredAndSortedCourses.length} of {courses.length} courses
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-dark-card border border-dark-border rounded-full mb-4">
              <Search size={32} className="text-text-muted" />
            </div>
            <h3 className="text-2xl font-bold text-text-light mb-2">No Courses Found</h3>
            <p className="text-text-muted max-w-lg mx-auto mb-6">
              We couldn't find any courses matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterCategory('');
                setSortBy('featured');
              }}
              className="px-6 py-3 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-md hover:shadow-hover"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
