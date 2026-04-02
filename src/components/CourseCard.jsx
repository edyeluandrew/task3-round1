import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  const truncateDescription = (text, length = 100) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <Link to={`/course/${course.id}`}>
      <div className="group bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-primary-base transition-premium h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-dark-border to-dark-surface">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-dark-card/95 backdrop-blur-sm rounded-md border border-dark-border flex items-center gap-1 shadow-card">
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-xs font-bold text-text-light">{course.rating}</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow p-5 gap-4">
          {/* Title */}
          <h3 className="text-base font-semibold text-text-light line-clamp-2 group-hover:text-primary-base transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-muted line-clamp-2 flex-grow">
            {truncateDescription(course.description)}
          </p>

          {/* Meta Info */}
          <div className="space-y-2.5 pb-4 border-t border-dark-border pt-4">
            {/* Duration */}
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Clock size={16} className="text-primary-base" />
              <span className="font-medium">{course.duration} hours</span>
            </div>

            {/* Price and Enrollments */}
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary-base">
                ${course.price}
              </span>
              <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                <Users size={14} /> {(course.enrollments / 1000).toFixed(1)}k
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full px-4 py-2.5 bg-primary-base hover:bg-primary-hover text-white rounded-lg font-semibold transition-premium shadow-card hover:shadow-hover flex items-center justify-center gap-2 group/btn">
            View Course
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Link>
  );
}




