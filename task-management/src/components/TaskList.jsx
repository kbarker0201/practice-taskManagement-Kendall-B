import { Link } from 'react-router';
import './TaskDetail'
import TaskDetail from './TaskDetail';
import React from 'react';

const TaskList = () => {
  const tasks = [
    {id: "123", title: "Dishes", description: "doing the dishes"},
    {id: "124", title: "Laundry", description: "doing the laundry"},
    {id: "125", title: "Dinner", description: "making dinner"},
];

  return (
    <div>
      <h1>Task List</h1>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;