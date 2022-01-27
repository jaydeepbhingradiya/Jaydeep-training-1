import { createStore } from "redux";

const formDetailReducer = (state = { person: {} }, action) => {
  switch (action.type) {
    case "PERSONAL_DETAILS":
      return { ...state, person: { ...action.payload } };

    default:
      return state;
  }
};

const store = createStore(
  formDetailReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
