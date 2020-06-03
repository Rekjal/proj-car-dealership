import formToRenderReducer from '../../reducers/form-to-render-reducer';
import * as c from '../../actions/ActionTypes';

describe("formToRenderReducer", () => {

  test('TEST-1 (formToRenderReducer): Should return default state if no action type is recognized', () => {
    expect(formToRenderReducer(false, { type: null })).toEqual(false);
  });

  test('TEST-2 (formToRenderReducer): Should toggle form visibility state to true', () => {
    expect(formToRenderReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  });

});