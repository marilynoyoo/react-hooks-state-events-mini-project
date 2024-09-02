import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Task from '../components/Task'; // Correct path to Task component

// Define a mock task for testing
const TASK = {
  id: 1,
  text: 'Test Task',
  category: 'Work',
};

test('renders the task and handles delete', () => {
  const handleDelete = jest.fn(); // Create a mock function for delete
  const { getByText } = render(
    <Task task={TASK} onDelete={() => handleDelete(TASK.id)} />
  );

  // Check if the task text and category are rendered
  expect(getByText('Test Task - Work')).toBeInTheDocument();

  // Simulate clicking the delete button
  fireEvent.click(getByText('Delete'));

  // Check if the delete handler was called with the correct task id
  expect(handleDelete).toHaveBeenCalledWith(TASK.id);
});
