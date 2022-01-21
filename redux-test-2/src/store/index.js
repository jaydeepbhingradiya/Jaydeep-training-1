import { createStore } from "redux";

const initialState = {
  user: [],
};
const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      let curState = { ...state };
      curState.user = [...state.user, action.payload];
      return curState;
    }

    case "UPDATE_USER": {
      let curState = { ...state };
      const index = curState.user.findIndex(
        (item) => item.id === action.payload.id
      );
      curState.user[index] = action.payload;
      return curState;
    }
    default:
      return state;
  }
};

const store = createStore(
  userInfoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
