import { createStore } from "redux";

const initailState={
    quantity:0
}

export const getInputValue = () => {
  return { type: "READ" };
};

export const setInputValue = () => {
    return { type: "WRITE" };
};

const reducer = (state=initailState, action) => {
  switch (action.type) {
    case "READ":
        console.log(...state)
      return {...state};
    
    case "WRITE":
        console.log({...state})
        return {...state, quantity:document.querySelector('#test').value}
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;