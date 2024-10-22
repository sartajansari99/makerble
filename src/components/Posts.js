import React, { useState } from "react";
import "./Styles/Post.css"; // Add some CSS later for styling
import img from "./post.jpg";
import Navbar from "./Navbar";

function PostUpdate() {
  const [project, setProject] = useState("Adoption Applications");
  const [updateText, setUpdateText] = useState("");

  const handlePost = () => {
    alert("Post submitted!");
  };

  return (
    <>
    <Navbar/>
      <div className="post-update-form">
        <div className="header">
          <div className="logos">
            <div className="logoss">
              <img src={img} alt="" className="logo" />
              <h2>Post An Update</h2>
            </div>
            <div className="footer">
              <button className="cancel-btn">Cancel</button>
              <button className="post-btn" onClick={handlePost}>
                Post
              </button>
            </div>
          </div>
        </div>
        <textarea
          className="update-input"
          placeholder="Post an update..."
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
        />
        <div className="pro">
          <b>Project:</b>
          <select
            className="project-dropdown"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option value="Adoption Applications">Adoption Applications</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="actions">
          <button className="action-btn">Add progress</button>
          <button className="action-btn">Attach</button>
          <button className="action-btn">Location</button>
          <button className="action-btn">Date</button>
        </div>
      </div>
    </>
  );
}

export default PostUpdate;
