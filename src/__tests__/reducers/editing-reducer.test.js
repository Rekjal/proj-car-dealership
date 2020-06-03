import editingReducer from "../../reducers/editing-reducer";
import * as c from '../../actions/ActionTypes';

describe("editingReducer", () => {
  let action;

  const edit1 = {
    editing: "true",
  };

  const edit2 = {
    editing: "false",
  };

  test("TEST-1 (editingReducer): Should return default state if there is no action type passed into the reducer", () => {
    expect(editingReducer({}, { type: null })).toEqual({});
  });

  test("TEST-2 (editingReducer): Should return state value of true if same is passed via action type", () => {
    const { editing } = edit1;
    action = {
      type: c.EDIT_EDITING,
      editing: editing,
    };
    expect(editingReducer({}, action)).toEqual(editing);
  });

  test("TEST-3 (editingReducer): Should return state value of false if same is passed via action type", () => {
    const { editing } = edit2;
    action = {
      type: c.EDIT_EDITING,
      editing: editing,
    };
    expect(editingReducer({}, action)).toEqual(editing);
  });
});
