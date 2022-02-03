import { createStore } from "redux";
let initialState = {
  person: [],
  selectedPerson: {},
};
const formDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON": {
      return state;
    }

    case "REMOVE_PERSON": {
      return state;
    }

    case "SET_SELECTED_PERSON": {
      return state;
    }

    case "SELECTED_PERSON": {
      return state;
    }

    case "EDIT_PERSON": {
      return state;
    }

    default:
      return state;
  }
};

const store = createStore(
  formDetailReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
