import * as c from './../actions/ActionTypes';

export const editEditing = (boolean) => ({
    type: c.EDIT_EDITING,
    editing: boolean,
  });


  export const toogleForm = () => ({
    type: c.TOGGLE_FORM,
  });


  export const addKeg = (keg) => {
    const { id, kegName, kegBrand, kegPrice, kegFlavor, pintQty, alertMessage, disableButton } = keg;
    return {
        type: c.ADD_KEG,
        id: id,
        kegName: kegName,
        kegBrand: kegBrand,
        kegPrice: kegPrice,
        kegFlavor: kegFlavor,
        pintQty: pintQty,
        alertMessage: alertMessage,
        disableButton: disableButton,
  }
}

export const deleteKeg = id => ({
    type: c.DELETE_KEG,
    id
  });

  export const editSelectedKeg = selectedKeg => ({
    type: c.EDIT_SELECTEDKEG,
    tempSelectedKeg: selectedKeg,
  });

  export const nullSelectedKeg = empty => ({
    type: c.SET_NULL_SELECTEDKEG,
    tempSelectedKeg: empty,
  });

      
      
