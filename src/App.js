import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
import Board from "./components/Board";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/board" element={<Board />} />
        <Route path="/post" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
