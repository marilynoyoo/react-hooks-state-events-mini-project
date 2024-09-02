import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onCategoryClick(category)}
          aria-label={`Filter tasks by ${category}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryFilter;
