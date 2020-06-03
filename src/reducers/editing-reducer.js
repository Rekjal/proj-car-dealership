import * as c from "./../actions/ActionTypes";

export default (state = false, action) => {
  const { type, editing } = action;
  switch (type) {
    case c.EDIT_EDITING:
      return editing;
    default:
      return state;
  }
};
