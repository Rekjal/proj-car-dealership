import formToRenderReducer from "./form-to-render-reducer";
import kegListReducer from "./keg-list-reducer";
import editingReducer from "./editing-reducer";
import selectKegReducer from "./selected-keg-reducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formToRender: formToRenderReducer,
  masterKegList: kegListReducer,
  edit: editingReducer,
  selectedKeg: selectKegReducer,
  firestore: firestoreReducer
});

export default rootReducer;
