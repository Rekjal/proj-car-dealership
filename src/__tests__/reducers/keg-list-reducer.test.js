import kegListReducer from "../../reducers/keg-list-reducer"
import * as c from '../../actions/ActionTypes';

describe("kegListReducer", () => {
  let action;
  const kegData = {
    kegName: "Coke",
    kegBrand: "Coca Cola",
    kegPrice: "$10",
    kegFlavor: "Cola",
    id: 123,
    pintQty: 15,
    alertMessage: "",
    disableButton: "disabled",
  };

  const currentState = {
    1: {
      kegName: "Pepsi",
      kegBrand: "Pepsi Co",
      kegPrice: "$11",
      kegFlavor: "Diet Cola",
      id: 124,
      pintQty: 10,
      alertMessage: "Almost Empty !",
      disableButton: "",
    },
    2: {
      kegName: "Gold Spot",
      kegBrand: "Indian Coke",
      kegPrice: "$12",
      kegFlavor: "Orange",
      id: 125,
      pintQty: 0,
      alertMessage: "Almost Empty !",
      disableButton: "disableButton",
    },
  };

  test("TEST-1 (kegList): Should successfully add new ticket data to masterKegList", () => {
    const {
      kegName,
      kegBrand,
      kegPrice,
      kegFlavor,
      id,
      pintQty,
      alertMessage,
      disableButton,
    } = kegData;
    action = {
      type: c.ADD_KEG,
      kegName: kegName,
      kegBrand: kegBrand,
      kegPrice: kegPrice,
      kegFlavor: kegFlavor,
      id: id,
      pintQty: pintQty,
      alertMessage: alertMessage,
      disableButton: disableButton,
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        kegName: kegName,
        kegBrand: kegBrand,
        kegPrice: kegPrice,
        kegFlavor: kegFlavor,
        id: id,
        pintQty: pintQty,
        alertMessage: alertMessage,
        disableButton: disableButton,
      },
    });
  });

  test("TEST-2 (kegList): Should successfully delete a ticket", () => {
    action = {
      type: c.DELETE_KEG,
      id: 1,
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        kegName: "Gold Spot",
        kegBrand: "Indian Coke",
        kegPrice: "$12",
        kegFlavor: "Orange",
        id: 125,
        pintQty: 0,
        alertMessage: "Almost Empty !",
        disableButton: "disableButton",
      },
    });
  });

  test("TEST-3 (kegList): Should return default state if there is no action type passed into the reducer", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});
