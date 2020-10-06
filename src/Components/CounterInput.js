import React from "react";
import { useDispatch } from "react-redux";

export default function CounterInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Minius</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}
