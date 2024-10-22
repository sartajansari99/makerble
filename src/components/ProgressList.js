import React from "react";
import ProgressItem from "./ProgressItem";

function ProgressList() {
  const progressData = [
    { id: 1, text: "I feel very lonely", value: 1, color: "#1BA39C" },
    { id: 2, text: "I get stomach-aches/cramps", value: 1, color: "#D64541" },
    { id: 3, text: "I have horrible dreams", value: 1, color: "#8E44AD" },
    { id: 4, text: "I have lots of energy", value: 1, color: "#1BA39C" },
    { id: 5, text: "I like going out", value: 9, color: "#D64541" },
  ];

  return (
    <div className="progress-list">
      <div className="header">
        <h3>Personal Progress</h3>
        <a href="/">Go to board</a>
      </div>
      {progressData.map((item) => (
        <ProgressItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProgressList;
