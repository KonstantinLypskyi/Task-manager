import React from 'react';
import PropTypes from 'prop-types';
import * as View from 'view';

import './assets/styles.scss';

export const TodoItem = ({ value, completed, date, toggleComplete }) => (
  <div className="task">
    <View.Checkbox
      className="task__checkbox"
      onChange={toggleComplete}
      checked={completed}
    />
    <p className="task__text">{value}</p>
    <span className="task__date">{!!completed && date}</span>
  </div>
);

TodoItem.propTypes = {
  value: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired
}