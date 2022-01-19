import { createStore } from "redux";
const userInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    default:
      return state;
  }
};

const store = createStore(userInfoReducer);
export default store;
