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

  useEffect(() => console.log("Hello"), []);

  useEffect(() => {
    setTotalTasks(taskList.length);
    setCompletedTasks(
      taskList.filter((task) => task.isCompleted === true).length
    );
  }, [taskList]);

  const handleStatusToggle = (targetIndex) => {
    const newTaskArray = taskList.map((task, index) =>
      index === targetIndex ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(newTaskArray);
  };

  const handleEdit = (newDesc, targetIndex) => {
    const newTaskArray = taskList.map((task, index) =>
      index === targetIndex ? { ...task, desc: newDesc } : task
    );
    setTaskList(newTaskArray);
  };

  const handleDelete = (targetIndex) => {
    const newList = taskList.filter((_, index) => index !== targetIndex);
    setTaskList(newList);
  };
  return (
    <>
      <Layout>
        <Overview totalTasks={totalTasks} completedTasks={completedTasks} />
        <AddTask
          handleAdd={(task) => {
            setTaskList([...taskList, task]);
          }}
        />
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
