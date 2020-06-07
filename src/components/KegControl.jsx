import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import "./Keg.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";
import GetDataInRealTime from "./GetDataInRealTime";
import { useSelector } from "react-redux"; //hook allows us to extract data from a Redux store.
// import { useFirestoreConnect, isLoaded } from "react-redux-firebase"; //hook allows us to listen for changes to Firestore without using an HOC in a class component.
import firebase from "./../firebase";
import React, { Component, useEffect, useState } from "react";
import {
  useFirestore,
  withFirestore,
  useFirestoreConnect,
  isEmpty,
  isLoaded,
} from "react-redux-firebase"; //"isLoaded" is authrization related

class KegControl extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   selectedKeg: null,
  //   //   editing: false,
  //   // };
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cars: [],
  //   };
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

  // fetchData = async () => {
  //   useFirestoreConnect([{ collection: "car" }]); //#####The useFirestoreConnect() hook comes from react-redux-firebase. -specify the collection or documents we want to listen to in Firestore.
  //  const counter = await useSelector((state) => state.firestore.ordered.car); //firestoreReducer passes data into a firestore data slice - from there grab state.firestore.tickets. save our collection in a constant called counter.
  //   const { dispatch } = this.props;
  //   const action = a.addKeg(counter);
  //   dispatch(action);
  // }

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
      const fetchdata = () => {
        const db = firebase.firestore();
        var counter;
        var docRef = db.collection("car");
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              counter = doc.data();
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
        const { dispatch } = this.props;
        const action = a.addKeg(counter);
        dispatch(action);
      };

      console.log("SALIM!!: INSIDE CONTROL - FETCHDATA IS ");
      const carObejct = fetchdata;
      console.log(carObejct);

      // currentlyVisibleForm = (
      //   <KegList
      //     className="grid-container flex-item card"
      //     kegList={this.props.masterKegList}
      //     onKegSelectPintSale={this.handlePintSale}
      //     onKegSelection={this.handleChangingSelectedKeg}
      //   />
      // ); //To handle user click on Keg.jsx, pass this method; Pass SHARED STATE "masterKegList" KegList.jsx
      
      currentlyVisibleForm = (
        <GetDataInRealTime
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
        <GetDataInRealTime />
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
