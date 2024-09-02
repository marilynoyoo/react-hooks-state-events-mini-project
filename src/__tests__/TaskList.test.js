import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskList from '../components/TaskList'; // Adjust the import path if necessary

// Define a mock array of tasks for testing
const TASKS = [
  { id: 1, text: 'Test Task 1', category: 'Work' },
  { id: 2, text: 'Test Task 2', category: 'Personal' },
  { id: 3, text: 'Test Task 3', category: 'Work' },
];

test("displays all tasks when initially rendered", () => {
  const { container } = render(<TaskList tasks={TASKS} onTaskDelete={() => {}} />);
  expect(container.querySelectorAll("div > span")).toHaveLength(TASKS.length);
});
