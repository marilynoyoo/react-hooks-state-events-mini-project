import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewTaskForm from '../components/NewTaskForm'; // Correct path to NewTaskForm component

// Define mock categories for testing
const CATEGORIES = ['Work', 'Personal'];

// Define a mock function for handling form submission
const handleTaskFormSubmit = jest.fn();

test('renders the form with categories and handles submission', () => {
  const { getByPlaceholderText, getByText, getByRole } = render(
    <NewTaskForm
      categories={CATEGORIES}
      onTaskFormSubmit={handleTaskFormSubmit}
    />
  );
  // Check that the input field and select dropdown are rendered
  expect(getByPlaceholderText('New task')).toBeInTheDocument();
  expect(getByRole('combobox')).toBeInTheDocument();

  // Simulate user input
  fireEvent.change(getByPlaceholderText('New task'), { target: { value: 'New Task' } });
  fireEvent.change(getByRole('combobox'), { target: { value: 'Work' } });

  // Simulate form submission
  fireEvent.click(getByText('Add Task'));

  // Check that the form submit handler is called with the correct arguments
  expect(handleTaskFormSubmit).toHaveBeenCalledWith({
    id: expect.any(Number), // Expecting a number for the id, since it’s generated with Date.now()
    text: 'New Task',
    category: 'Work',
  });
})
