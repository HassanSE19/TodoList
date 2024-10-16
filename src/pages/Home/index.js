import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Overview from "../../components/Overview";
import AddTask from "../../components/AddTask";
import TaskList from "../../components/TaskList";

const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [totalTasks, setTotalTasks] = useState(taskList.length);
  const [completedTasks, setCompletedTasks] = useState(
    taskList.filter((task) => task.isCompleted === true).length
  );

  useEffect(() => {
    setTotalTasks(taskList.length);
    setCompletedTasks(
      taskList.filter((task) => task.isCompleted === true).length
    );
  }, [taskList]);

  const handleAdd = (task) => {
    setTaskList([...taskList, task]);
  };

  const handleStatusToggle = (index) => {
    const newTaskArray = taskList.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(newTaskArray);
  };

  const handleEdit = (newDesc, index) => {
    const newTaskArray = taskList.map((task, i) =>
      i === index ? { ...task, desc: newDesc } : task
    );
    setTaskList(newTaskArray);
  };

  const handleDelete = (targetIndex) => {
    let newList = taskList.filter((_, index) => index !== targetIndex);
    setTaskList(newList);
  };
  return (
    <>
      <Layout>
        <Overview totalTasks={totalTasks} completedTasks={completedTasks} />
        <AddTask handleAdd={handleAdd} />
        <TaskList
          taskList={taskList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleStatusToggle={handleStatusToggle}
        />
      </Layout>
    </>
  );
};

export default Home;
