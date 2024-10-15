import React from "react";
import icon from "../../assets/images/icon.png";
// import style from "./style.module.css";

const Layout = ({ children }) => {
  return (
    <div className="w-3/5 mx-auto pt-8 h-screen">
      <div className="flex items-center">
        <img src={icon} className="mr-4 w-10 h-10" />
        <div className="text-4xl font-bold">Todo List</div>
      </div>
      <div className="h-5/6 w-1/2 mx-auto mt-10">{children}</div>
    </div>
  );
};

export default Layout;
