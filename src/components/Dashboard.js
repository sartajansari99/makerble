import React from "react";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";
import Newsfeed from "../components/Newsfeed";
import Taskmanager from "../components/Taskmanager";
// import ProgressBoard from "./ProgressItem";
// import ProgressItem from "./ProgressItem";
import ProgressList from "./ProgressList";
function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Slidebar />
        <div className="content-area">
          <Newsfeed />
          <Newsfeed />
          <Newsfeed />
          <Newsfeed />
        </div>
        <div className="task-progress">
          <ProgressList />
          <Taskmanager />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
