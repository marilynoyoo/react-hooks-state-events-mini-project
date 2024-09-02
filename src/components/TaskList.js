import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onTaskDelete(task.id)}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default TaskList;
