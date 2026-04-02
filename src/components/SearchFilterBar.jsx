import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchFilterBar({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  filterCategory,
  onFilterChange,
}) {
  const categories = ['All', 'Web Development', 'Web Design', 'Mobile Development'];

  return (
    <div className="bg-dark-surface border-b border-dark-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-card border border-dark-border text-text-light placeholder-text-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-premium"
            />
          </div>

          {/* Sort Dropdown */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-dark-card border border-dark-border text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-premium cursor-pointer font-medium"
            >
              <option value="featured" className="bg-dark-card text-text-light">Sort by: Featured</option>
              <option value="price-low" className="bg-dark-card text-text-light">Sort by: Price (Low to High)</option>
              <option value="price-high" className="bg-dark-card text-text-light">Sort by: Price (High to Low)</option>
              <option value="rating" className="bg-dark-card text-text-light">Sort by: Highest Rating</option>
              <option value="popular" className="bg-dark-card text-text-light">Sort by: Most Popular</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={filterCategory}
              onChange={(e) => onFilterChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-dark-card border border-dark-border text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-premium cursor-pointer font-medium"
            >
              {categories.map((category) => (
                <option key={category} value={category === 'All' ? '' : category} className="bg-dark-card text-text-light">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Tags */}
        {(searchTerm || filterCategory) && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {searchTerm && (
              <div className="px-3 py-1.5 bg-dark-card border border-primary-base/30 text-text-light rounded-full text-sm font-medium inline-flex items-center gap-2 hover:border-primary-base transition-premium">
                <span>"{searchTerm}"</span>
                <button
                  onClick={() => onSearchChange('')}
                  className="hover:text-primary-base transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {filterCategory && (
              <div className="px-3 py-1.5 bg-dark-card border border-primary-base/30 text-text-light rounded-full text-sm font-medium inline-flex items-center gap-2 hover:border-primary-base transition-premium">
                <span>{filterCategory}</span>
                <button
                  onClick={() => onFilterChange('')}
                  className="hover:text-primary-base transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
