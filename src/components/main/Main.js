import React, { useState } from "react";

function Main() {
  let [count, setCount] = useState(10);
  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>increment</button>
      <button
        disabled={count <= 10}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default Main;
