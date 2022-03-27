import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./Stopwatch.css";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timer) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <>
      <div className="timediv">
        <span>{("0" + (Math.floor(time / 600000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="parent">
        {!timer && time === 0 && (
          <Button
            onClick={() => {
              setTimer(true);
            }}
            variant="contained"
          >
            Start
          </Button>
        )}
        {timer && (
          // <button
          //   onClick={() => {
          //     setTimer(false);
          //   }}
          // >
          //   Stop
          // </button>
          <Button
            onClick={() => {
              setTimer(false);
            }}
            variant="contained"
          >
            Stop
          </Button>
        )}
        {!timer && time !== 0 && (
          // <button
          //   onClick={() => {
          //     setTimer(true);
          //   }}
          // >
          //   Resume
          // </button>
          <Button
            onClick={() => {
              setTimer(true);
            }}
            variant="contained"
          >
            Resume
          </Button>
        )}

        {!timer && time > 0 && (
          // <button
          //   onClick={() => {
          //     setTime(0);
          //   }}
          // >
          //   Reset
          // </button>
          <Button
            onClick={() => {
              setTime(0);
            }}
            variant="contained"
          >
            Reset
          </Button>
        )}
      </div>
    </>
  );
};
