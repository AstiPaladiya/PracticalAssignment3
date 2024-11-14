// src/components/TaskManager.js
import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Finish React assignment', completed: false },
        { id: 2, text: 'Review React concepts', completed: false },
      ],
    };
  }

  addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  toggleTaskCompletion = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;