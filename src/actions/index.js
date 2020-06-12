import * as c from './../actions/ActionTypes';

export const editEditing = (boolean) => ({
    type: c.EDIT_EDITING,
    editing: boolean,
  });


  export const toogleForm = () => ({
    type: c.TOGGLE_FORM,
  });


  export const addKeg = (keg) => {
    const { id, ImageURLs, Make, Model } = keg;
    return {
        type: c.ADD_KEG,
        id: id,
        ImageURLs: ImageURLs,
        Make: Make,
        Model: Model,
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

      
      
