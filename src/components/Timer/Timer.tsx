import React, { useState, useEffect } from "react";
import "./Timer.css";
import SetTimer from "../SetTime/SetTimer";

function Timer() {
  const [time, setTime] = useState<number>(0);
  const [timeArray, setTimeArray] = useState<Array<number>>([0]);

  useEffect(() => {
    let timeArray: number[] = SetTimer(time);
    setTimeArray(timeArray);
  }, [time]);

  return (
    <div>
      <div className="time">
        <p className="time-text">{timeArray[0]}</p>
        <span>:</span>
        <p className="time-text">{timeArray[1]}</p>
        <span>:</span>
        <p className="time-text">{timeArray[2]}</p>
      </div>
    </div>
  );
}

export default Timer;
