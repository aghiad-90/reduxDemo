// three main concepts in Redux
// 1- store :holds the state of the app
// 2- actions : which describs the the changes in state
// 3- reducer : which carries out the transition in the state
// and the reducer will be a function like this
// reducer (prevState , action) => newState.

// action
const actions = {
  type: "BUY_CACK",
};

const buyCkake = () => {
  return actions;
};

// init our state

const initialState = {
  numOfCakes: 10,
  Didwehave: false,
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CACKE":
      return {
        ...state, // we are copying the state object and only change the prop we
        // are interest in
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
