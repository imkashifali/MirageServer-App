import React from "react";
import { useDispatch } from "react-redux";
import {IncrementAction, DecrementAction, ResetAction} from './Action'


export default function CounterInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(IncrementAction())}>Plus</button>
      <button onClick={() => dispatch(DecrementAction())}>Minius</button>
      <button onClick={() => dispatch(ResetAction())}>RESET</button>
    </div>
  );
}
