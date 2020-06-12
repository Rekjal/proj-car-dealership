import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const {
    id,
    ImageURLs,
    Make,
    Model,
  } = action;
  switch (action.type) {
    case c.ADD_KEG:
      const newState2 = { ...state };
      return newState2;
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
