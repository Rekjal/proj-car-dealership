import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const {
    kegName,
    kegBrand,
    kegPrice,
    kegFlavor,
    id,
    pintQty,
    alertMessage,
    disableButton,
  } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, { //2nd arg is state to be cloned. 3rd arg is changes ot be made to cloned object
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
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
