import { Link } from 'react-router';
import './TaskList'
import TaskList from './TaskList'
import { useParams } from 'react-router';
import React from 'react';

const TaskDetail = () => {
  const { taskId } = useParams();

  const tasks = [
    {id: "123", title: "Dishes", description: "doing the dishes"},
    {id: "124", title: "Laundry", description: "doing the laundry"},
    {id: "125", title: "Dinner", description: "making dinner"},
  ];

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return <h2>Task Not Found</h2>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetail;