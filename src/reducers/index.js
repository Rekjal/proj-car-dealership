import formToRenderReducer from "./form-to-render-reducer";
import kegListReducer from "./keg-list-reducer";
import editingReducer from "./editing-reducer";
import selectKegReducer from "./selected-keg-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formToRender: formToRenderReducer,
  masterKegList: kegListReducer,
  edit: editingReducer,
  selectedKeg: selectKegReducer,
});

export default rootReducer;
