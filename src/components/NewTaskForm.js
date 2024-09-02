import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0] || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onTaskFormSubmit({ id: Date.now(), text, category });
      setText('');
      setCategory(categories[0] || '');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskText">Task:</label>
      <input
        id="taskText"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
        aria-required="true"
      />
      <label htmlFor="taskCategory">Category:</label>
      <select
        id="taskCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-required="true"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

NewTaskForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;
