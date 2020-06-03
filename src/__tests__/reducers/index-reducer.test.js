import rootReducer from "../../reducers/index";
import formToRenderReducer from "../../reducers/form-to-render-reducer";
import kegListReducer from "../../reducers/keg-list-reducer";
import selectedKegReducer from "../../reducers/selected-keg-reducer";
import editingReducer from "../../reducers/editing-reducer";
import * as c from '../../actions/ActionTypes';

import { createStore } from "redux";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("TEST-1 (rootReducer): Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formToRender: false,
      edit:false,
      selectedKeg: null,
    });
  });

  test("TEST-2 (rootReducer): Check that initial state of ticketListReducer matches root reducer", () => {
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(undefined, { type: null })
    );
  });

  test("TEST-3 (rootReducer): Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formToRender).toEqual(
      formToRenderReducer(undefined, { type: null })
    );
  });

  test('TEST-4 (rootReducer): Check that initial state of kegListReducer matches root reducer', () => {
    const action = {
        type: c.ADD_KEG,
        kegName: 'Fanta',
        kegBrand: 'Pepsi Co',
        kegPrice: 10,
        kegFlavor: "Orangy",
        id: 10,
        pintQty: 15,
        alertMessage: "Almost Empty !",
        disableButton: "disableButton",
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });
  
  test('TEST-5 (rootReducer): Check that initial state of formToRenderReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formToRender).toEqual(formToRenderReducer(undefined, action));
  });

  test('TEST-6 (rootReducer): Check that initial state of selectedKegReducer matches root reducer', () => {
    const action = {
      type: c.SET_NULL_SELECTEDKEG,
      tempSelectedKeg: null,
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

  test('TEST-7 (rootReducer): Check that initial state of editingReducer matches root reducer', () => {
    const action = {
      type: c.EDIT_EDITING,
      editing: true,
    }
    store.dispatch(action);
    expect(store.getState().edit).toEqual(editingReducer(undefined, action));
  });

});
