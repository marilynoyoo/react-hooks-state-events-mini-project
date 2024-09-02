import React from 'react';
import PropTypes from 'prop-types';

function Task({ task, onDelete }) {
  return (
    <div>
      <span>{task.text} - {task.category}</span>
      <button 
        onClick={onDelete} 
        aria-label={`Delete task: ${task.text}`}
      >
        Delete
      </button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
