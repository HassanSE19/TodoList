import React from "react";
import Task from "./Task";

const TaskList = ({
  taskList,
  handleEdit,
  handleDelete,
  handleStatusToggle,
}) => {
  return (
    <div className="h-[40vh] overflow-y-scroll no-scrollbar">
      {taskList.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleStatusToggle={handleStatusToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
