import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h1>Timer: {count}s</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default StopWatch;
