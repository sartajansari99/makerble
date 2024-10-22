import React from 'react';
import './Styles/Newsfeed.css'
function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <img 
          src="https://via.placeholder.com/50" 
          alt="user avatar"
          className="avatar"
        />
        <div className="post-details">
          <h4>Demo Sports Coach User</h4>
          <p>Posted at 11:15 on 21st Nov 2023</p>
        </div>
        <button className="update-btn">Update</button>
      </div>
      
      <div className="post-content">
        <p>
          <strong>New update</strong> by Demo Sports Coach User working on the <a href="/">Sample Project</a> for We Are The SportyKids
        </p>
        <p>Indoor Cricket Session witnessed an attendance of 100 people</p>
      </div>

      <div className="post-footer">
        <div className="post-meta">
          <p>Posted about 8 hours ago</p>
        </div>
        <div className="post-actions">
          <span role="img" aria-label="heart">❤️</span>
          <span>0 Comments</span>
          <span>0 Favourites</span>
        </div>
      </div>

      <div className="post-comment">
        <input type="text" placeholder="Write a comment..." />
        <button>Post</button>
      </div>
    </div>
  );
}

export default Post;
