import { increment, decrement, reset } from "./Action";
const initializeState = {
  counter: 0,
  name: "Ali",
  mazy: "MBA",
};

export default function CounterReducer(state = initializeState, action) {
  switch (action.type) {
    case increment:
      return { ...state, counter: state.counter + 1 };

    case decrement:
      return { ...state, counter: state.counter - 1 };

    case reset:
      return {...initializeState};

    default:
      return state;
  }
}
