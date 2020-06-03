import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const { tempSelectedKeg, type } = action;
  switch (type) {
    case c.EDIT_SELECTEDKEG:
      const newState1 = { ...tempSelectedKeg };
      return newState1;
    case c.SET_NULL_SELECTEDKEG:
      const newState = null;
      return newState;
    default:
      return state;
  }
};
