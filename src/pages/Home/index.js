import React from "react";

import Layout from "../../components/Layout";
import Overview from "../../components/Overview";
import AddTask from "../../components/AddTask";
import Task from "../../components/Task";

// import style from "./style.module.css";

const Home = () => {
  return (
    <>
      <Layout>
        <Overview />
        <AddTask />
        <Task />
      </Layout>
    </>
  );
};

export default Home;
