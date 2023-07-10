import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

Counter.propTypes = {};
function Counter(props) {
  const [count, setCount] = useState(0);
  function handleClick1() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick1}>incrementing</button>
      <button onClick={handleClick2}>decrementing</button>
    </div>
  );
}

export default Counter;
