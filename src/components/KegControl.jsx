import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import "./Keg.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";

class KegControl extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   selectedKeg: null,
  //   //   editing: false,
  //   // };
  // }

  handleClick = () => {
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action6 = a.nullSelectedKeg(null);
      dispatch(action6);
      const action3 = a.editEditing(false);
      dispatch(action3);
    } else {
      const { dispatch } = this.props;
      const action = a.toogleForm();
      dispatch(action);
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toogleForm();
    dispatch(action2);
  };

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action7 = a.editSelectedKeg(selectedKeg);
    dispatch(action7);
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action8 = a.nullSelectedKeg(null);
    dispatch(action8);
  };

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action3 = a.editEditing(true);
    dispatch(action3);
  };

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action3 = a.addKeg(kegToEdit);
    dispatch(action3);
    const action9 = a.nullSelectedKeg(null);
    dispatch(action9);
    const action10 = a.editEditing(false);
    dispatch(action10);
  };

  handlePintSale = (idOfSelected) => {
    const disabledText = "disabled";
    const tempSelectedKeg = this.props.masterKegList[idOfSelected];
    if (tempSelectedKeg.pintQty !== 0) {
      tempSelectedKeg.pintQty = tempSelectedKeg.pintQty - 1;
    }
    let tempAlertMessage = "";
    let tempDisableButton = tempSelectedKeg.disableButton;
    if (tempSelectedKeg.pintQty === 0) {
      tempAlertMessage = "Out Of Stock !!!";
      tempDisableButton = disabledText;
      tempSelectedKeg.alertMessage = tempAlertMessage;
      tempSelectedKeg.disableButton = tempDisableButton;
    } else if (tempSelectedKeg.pintQty > 0) {
      if (tempSelectedKeg.pintQty >= 1 && tempSelectedKeg.pintQty <= 9) {
        tempAlertMessage = "Almost Empty !";
        tempSelectedKeg.alertMessage = tempAlertMessage;
      }
    }
    const { dispatch } = this.props;
    const action = a.addKeg(tempSelectedKeg);
    dispatch(action);
  };

  render() {
    let currentlyVisibleForm = null;
    let buttonText = null;
    if (this.props.edit) {
      currentlyVisibleForm = (
        <EditKegForm
          keg={this.props.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleForm = (
        <KegDetail
          keg={this.props.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.props.formToRender) {
      currentlyVisibleForm = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleForm = (
        <KegList
          className="grid-container flex-item card"
          kegList={this.props.masterKegList}
          onKegSelectPintSale={this.handlePintSale}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      ); //To handle user click on Keg.jsx, pass this method; Pass SHARED STATE "masterKegList" KegList.jsx
      buttonText = "Add New Keg";
    }

    return (
      <React.Fragment>
        <div id="card-list" className="flex-container">
          {currentlyVisibleForm}
        </div>
        <div>
          <br></br>
          <button
            className="buttonPrimary btn btn-primary"
            onClick={this.handleClick}
          >
            {buttonText}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formToRender: PropTypes.bool,
  edit: PropTypes.bool,
  selectedKeg: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    masterKegList: state.masterKegList,
    formToRender: state.formToRender,
    edit: state.edit,
    selectedKeg: state.selectedKeg,
  };
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
