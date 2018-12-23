import React from 'react';
import PropTypes from 'prop-types';
import * as View from 'view';

import './assets/styles.scss';

export const TodoList = ({
  value,
  handleChange,
  addTask,
  tasks,
  focus,
  toggleComplete,
  setFocus
}) => {
  const handleClick = () => {
    setFocus(false);
    addTask();
  };
  return (
  <div className="task__wrapper">
    <h2 className="task-manager__title-top">Task Manager</h2>
    <div className="task-manager">
      <h2 className="task-manager__title-bottom">Work</h2>
      <View.Form className="task-manager__form" onSubmit={addTask}>
        <img className="task-manager__icon" src="images/plus.png" alt="plus" />
        <View.Input
          value={value}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => !value && setFocus(false)}
          className="task-manager__field"
          placeholder="Add new task"
          required
        />
        {focus && (
          <span onClick={handleClick} className="task-manager__button">
            Add
          </span>
        )}
      </View.Form>
      <div className="task-manager__list">
        {tasks.map(task => (
          <View.TodoItem
            key={task.id}
            toggleComplete={() => toggleComplete(task.id, !task.completed)}
            date={task.date}
            value={task.value}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  </div>
)};

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  focus: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  setFocus: PropTypes.func.isRequired
}