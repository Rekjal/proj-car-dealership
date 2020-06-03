import selectedKegReducer from "../../reducers/selected-keg-reducer";
import * as c from '../../actions/ActionTypes';

describe("selectedKegReducer", () => {
  let action;

  const tempSelectedKeg = {
    kegName: "Coke",
    kegBrand: "Coca Cola",
    kegPrice: "$10",
    kegFlavor: "Cola",
    id: 123,
    pintQty: 15,
    alertMessage: "",
    disableButton: "disabled",
  };


  test("TEST-1 (selectedKegReducer): Should return default state if there is no action type passed into the reducer", () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({});
  });

  test("TEST-2 (selectedKegReducer): Should return default state of null if action type passed into the reducer is SET_NULL_SELECTEDKEG", () => {
    action = {
      type: c.SET_NULL_SELECTEDKEG,
      tempSelectedKeg: null,
    };
    expect(selectedKegReducer({}, action)).toEqual(null);
  });

  test("TEST-3 (selectedKegReducer): Should return state value of sampleKeg if same is passed via action type", () => {
    const {
      alertMessage,
      disableButton,
      id,
      kegBrand,
      kegFlavor,
      kegName,
      kegPrice,
      pintQty,
    } = tempSelectedKeg;

    let action2 = {
      type: c.EDIT_SELECTEDKEG,
      tempSelectedKeg: tempSelectedKeg,
    };
    expect(selectedKegReducer({}, action2)).toEqual({        
          kegName: kegName,
          kegBrand: kegBrand,
          kegPrice: kegPrice,
          kegFlavor: kegFlavor,
          id: id,
          pintQty: pintQty,
          alertMessage: alertMessage,
          disableButton: disableButton,        
      });
    });

});
