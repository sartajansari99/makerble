import React, { useState } from "react";
import "./Styles/Project.css";
import Navbar from "./Navbar";

function ProjectCreation() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [teamMembers, setTeamMembers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can log or send the project data to the backend API
    const projectData = {
      projectName,
      description,
      startDate,
      endDate,
      teamMembers,
    };
    console.log("Project Created:", projectData);

    // Reset form fields after submission
    setProjectName("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setTeamMembers("");
  };

  return (
    <>
      <Navbar />
      <div className="project-creation-container">
        <h2>Create a New Project</h2>
        <form className="project-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Name:</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter project description"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Team Members (comma-separated):</label>
            <input
              type="text"
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
              placeholder="Enter team member names"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Create Project
          </button>
        </form>
      </div>
    </>
  );
}

export default ProjectCreation;
