import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryFilter from '../components/CategoryFilter'; // Correct path to CategoryFilter component

// Define mock categories for testing
const CATEGORIES = ['All', 'Work', 'Personal'];

test('renders all category buttons', () => {
  const handleCategoryClick = jest.fn();
  const { getByText } = render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory='All'
      onCategoryClick={handleCategoryClick}
    />
  );

  CATEGORIES.forEach(category => {
    expect(getByText(category)).toBeInTheDocument();
  });
})
test('handles category button click', () => {
  const handleCategoryClick = jest.fn();
  const { getByText } = render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory='All'
      onCategoryClick={handleCategoryClick}
    />
  );

  // Simulate clicking the 'Work' category button
  fireEvent.click(getByText('Work'));

  // Check if the click handler was called with the correct category
  expect(handleCategoryClick).toHaveBeenCalledWith('Work');
});
