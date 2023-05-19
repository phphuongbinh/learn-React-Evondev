import React, { useEffect, useState } from "react";
import './Counter.scss'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
      setCounter(counter + 1)
    
  };

  useEffect(()=> {
    console.log(counter);
  }, [counter])
  return <div className="container" >
    <h1 className="heading">{counter}</h1>
    <button onClick={handleIncrement} className="btn">Increment</button>
  </div>;
};

export default Counter;
