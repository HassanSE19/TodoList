import React, { useState } from "react";
import { editIcon } from "../../../assets/svg/edit";
import { binIcon } from "../../../assets/svg/bin";

const Task = ({
  task,
  index,
  handleEdit,
  handleDelete,
  handleStatusToggle,
}) => {
  const [allowEdit, setAllowEdit] = useState(false);

  const handleTaskEdit = (event) => {
    event.preventDefault();
    setAllowEdit(false);
    handleEdit(event.target[0].value, index);
  };

  return allowEdit ? (
    <div className="border-[#c2b39a] border h-16 mb-[27px]" key={index}>
      <form className="w-full h-full" onSubmit={handleTaskEdit}>
        <label>
          <input
            type="text"
            id="todo"
            defaultValue={task.desc}
            name="todo"
            className="h-full bg-[#000000] text-white w-full px-4"
            style={{ outline: "none" }}
          />
        </label>
      </form>
    </div>
  ) : (
    <div className="border border-[#c2b39a] flex justify-between p-4 h-16 mb-[27px]">
      <button
        onClick={() => handleStatusToggle(index)}
        className="flex items-center"
      >
        <div
          className={`h-8 w-8 border-2 rounded-[50%] ${
            task.isCompleted ? "bg-[#22C55E]" : ""
          } border-[#22C55E] mr-4`}
        ></div>
        <div
          className={`max-w-[280px] max-h-12  overflow-y-scroll no-scrollbar ${
            task.isCompleted ? "line-through" : ""
          }`}
        >
          {task.desc}
        </div>
      </button>

      <div>
        <button className="mr-2" onClick={() => setAllowEdit(true)}>
          {editIcon}
        </button>
        <button onClick={() => handleDelete(index)}>{binIcon}</button>
      </div>
    </div>
  );
};

export default Task;
