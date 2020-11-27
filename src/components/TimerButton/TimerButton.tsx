import React, { useState } from "react";
import "./TimerButton.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

// type Props = {
//   setTime: Function | any
// }

function TimerButton(props: any): any {
  const { setTime } = props;
  const [inter, setInter] = useState<number>(0);
  
  
  
  const start = () => {
    let inter: any = setInterval(() => {
      setTime((prev: number) => prev + 1);
    }, 10);
    setInter(inter);
  };
  const stop = () => {
    clearInterval(inter);
  };
  const reset = () => {
    clearInterval(inter);
    setTime(0);
  };

  return (
    <div className="control">
      <button onClick={start}>
        <PlayCircleFilledWhiteIcon />
      </button>
      <button onClick={stop}>
        <HighlightOffIcon />
      </button>
      <button onClick={reset}>
        <RotateLeftIcon />
      </button>
    </div>
  );
}

export default TimerButton;
