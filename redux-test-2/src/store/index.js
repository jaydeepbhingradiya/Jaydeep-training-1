import { createStore } from "redux";
const userInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    case "EDIT_USER":
      const index = state.findIndex((item) => item.id === action.payload.id);
      const newData = [...state];
      newData[index] = action.payload;
      return newData;

    default:
      return state;
  }
};

const store = createStore(userInfoReducer);
export default store;
