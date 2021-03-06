import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerHook3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer Hook example 3</h1>

      <h3>Counter : {count}</h3>
      <button onClick={() => dispatch("increment")} type="button">
        INCREMENT
      </button>
      <button onClick={() => dispatch("decrement")} type="button">
        DECREMENT
      </button>
      <button onClick={() => dispatch("reset")} type="button">
        RESET
      </button>
      <div>
        <h3>Counter : {countTwo}</h3>
        <button onClick={() => dispatchTwo("increment")} type="button">
          INCREMENT
        </button>
        <button onClick={() => dispatchTwo("decrement")} type="button">
          DECREMENT
        </button>
        <button onClick={() => dispatchTwo("reset")} type="button">
          RESET
        </button>
      </div>
    </div>
  );
}

export default ReducerHook3;
