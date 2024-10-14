import React from "react";
// import style from "./style.module.css";

const overview = () => {
  return (
    <div className="h-2/6 mb-8 border-2 rounded-xl px-3 flex justify-around items-center">
      <div>
        <p className="text-3xl">Task Done</p>
        <p className="text-2xl">Keep it up</p>
      </div>
      <div className="h-32 w-32 text-center flex items-center text-5xl bg-lime-400 text-center justify-center rounded-[50%]">
        {"0/0"}
      </div>
    </div>
  );
};

export default overview;
