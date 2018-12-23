import React, { Component } from 'react';
import * as View from 'view';
import * as utils from 'utils';

class TodoList extends Component {
  state = {
    tasks: utils.getTasks() || [],
    value: '',
    focus: false
  };

  delay = 60000;

  componentDidMount() {
    if (utils.getCompletedTasks(this.state.tasks).length) {
      this.deleteTask(utils.getCompletedTasks(this.state.tasks));
    }
  }

  componentDidUpdate() {
    const { tasks } = this.state;
    if (!utils.comparingArrays(tasks, utils.getTasks())) {
      utils.setTasks(tasks);
    }
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  setFocus = focus => this.setState({ focus });

  addTask = () => {
    const task = {
      value: this.state.value,
      date: utils.getDate(),
      id: utils.makeId(),
      completed: false
    };
    if (this.state.value) {
      this.setState(({ tasks }) => ({ tasks: [...tasks, task], value: '' }));
    }
  };

  deleteTask = key => {
    const tasks = this.state.tasks.filter(task => {
      if (typeof key === 'string') {
        return task.completed ? task.id !== key : task;
      } else {
        return key.indexOf(task.id) < 0;
      }
    });
    this.setState({ tasks });
  };

  toggleComplete = (key, completed) => {
    const tasks = this.state.tasks.map(task => {
      if (key === task.id) {
        return (task = { ...task, completed: !task.completed });
      }
      return task;
    });
    this.setState({ tasks }, () => {
      if (completed) {
        setTimeout(() => {
          this.deleteTask(key);
        }, this.delay);
      }
    });
  };

  render() {
    const { tasks, value, focus } = this.state;
    return (
      <View.TodoList
        tasks={tasks.sort(utils.sortTasks)}
        value={value}
        focus={focus}
        handleChange={this.handleChange}
        addTask={this.addTask}
        toggleComplete={this.toggleComplete}
        setFocus={this.setFocus}
      />
    );
  }
}

export default TodoList;