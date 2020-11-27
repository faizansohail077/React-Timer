import React from "react";
import "./Timer.css";

function Timer() {
  return (
    <div>
      <div className="time">
        <p className="time-text">0</p>
        <span>:</span>
        <p className="time-text">0</p>
        <span>:</span>
        <p className="time-text">0</p>
      </div>
    </div>
  );
}

export default Timer;
