import * as c from "./../actions/ActionTypes";

export default (state = false, action2) => {
  switch (action2.type) {
    case c.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
};
