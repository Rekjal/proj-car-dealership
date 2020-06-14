import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
// import CarDetail from "./CarDetail";
import EditKegForm from "./EditKegForm";
import "./Car.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "../actions";
import Pagination from "./Pagination";
import { useSelector } from "react-redux"; //hook allows us to extract data from a Redux store.
// import { useFirestoreConnect, isLoaded } from "react-redux-firebase"; //hook allows us to listen for changes to Firestore without using an HOC in a class component.
import firebase from "../firebase";
import React, { Component, useEffect, useState } from "react";
import { paginate } from "../utils/paginate";
import DataToFireStore from "./DataToFireStore";
import RenderCar from "./RenderCar";
import LazyLoad from "./LazyLoad";
import CarDetail from "./CarDetail";

// import {getMovies} from "./movieObjectComp";
// import index from "./index";

import {
  useFirestore,
  withFirestore,
  useFirestoreConnect,
  isEmpty,
  isLoaded,
} from "react-redux-firebase"; //"isLoaded" is authrization related

class CarControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formToRender: false, //Local State
      masterCarList: [], //Shared State (passed down to KegList.jsx and from there to Keg.jsx)
      selectedKeg: null,
      alertMessage: null,
      editing: false,
      pageSize: 8,
      currentPage: 1,
      currentVisibleForm: false,
      selectedCar: null,
    };
  }

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

  handleClickCars = () => {
    // this.setState({currentPage: 1});
    if (this.state.currentVisibleForm === false) {
      this.setState({ currentVisibleForm: true });
    } else {
      this.setState({ currentVisibleForm: false });
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toogleForm();
    dispatch(action2);
  };

  handleChangingSelectedCar = (id) => {
    const selectedCar = this.state.masterCarList.filter(
      (car) => car.id === id
    )[0];
    console.log("inside handleChangingSelectedCar - ID of clicked car is ");
    console.log(selectedCar);
    this.setState({ selectedCar: selectedCar }); //selectedCar will store object from SHARED SHARE masterCarList with a UUID corresponding to clicked car
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

  handlePageChange = (page) => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  componentDidMount() {
    const db = firebase.firestore();
    db.collection("car")
      .get()
      .then((querySnapshot) => {
        // const cars = querySnapshot.docs.map((doc) => doc.data());
        const cars = querySnapshot.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return { id, ...data };
        });
        const { dispatch } = this.props;
        const action = a.addKeg(cars);
        dispatch(action);
        // const newMasterCarList = this.state.masterCarList.concat(cars);
        this.setState({
          masterCarList: cars,
          formToRender: false,
        });
      });
  }

  render() {
    let currentlyVisibleForm = null;
    let renderForm = null;
    let renderForm2 = null;
    let buttonText = null;
    // console.log("SALIM!!: INSIDE CONTROL - STATE masterCarList is ");
    // console.log(JSON.stringify(this.state.masterCarList));
    const paginationCarArray = paginate(
      this.state.masterCarList,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log(
      "SALIM: INSIDE KEGCONTROL:::THINGS GOING TO PGAINATION FUCNTIONA ARE "
    );
    // console.log(this.state.pageNumber);
    // console.log(this.state.pageSize);
    // console.log(paginationCarArray);

    if (this.props.edit) {
      currentlyVisibleForm = (
        <EditKegForm
          keg={this.props.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Car List";
    } else if (this.state.selectedCar != null) {
      console.log("I AM HEREREERERERER - (this.props.selectedCar != null)  ");
      currentlyVisibleForm = (
        <LazyLoad
          selectedCar={this.state.selectedCar}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      renderForm2 =   <CarDetail selectedCar={this.state.selectedCar} />
      buttonText = "Return to Car Listing";
    } else if (this.props.formToRender) {
      currentlyVisibleForm = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = "Return to Car Listing";
    } else {
      // console.log("I AM HEREREERERERER - else  ");

      if (this.state.currentVisibleForm) {
        buttonText = "Go to Listing Page";
        currentlyVisibleForm = <DataToFireStore />;
      } else {
        buttonText = "Go to Data Upload Page";
        currentlyVisibleForm = (
          <RenderCar
            carList={paginationCarArray}
            onCarSelection={this.handleChangingSelectedCar }
          />
        );
        renderForm2 = (
          <Pagination className = "pagination" itemsCount={this.state.masterCarList.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        );
      }

      // currentlyVisibleForm = (
      //   <LoadDataToFS
      //     className="grid-container flex-item card"
      //     kegList={this.props.masterKegList}
      //     onKegSelectPintSale={this.handlePintSale}
      //     onKegSelection={this.handleChangingSelectedKeg}
      //   />
      // ); //To handle user click on Keg.jsx, pass this method; Pass SHARED STATE "masterKegList" KegList.jsx

      // buttonText = "Add New Keg";
    }

    return (
      <React.Fragment>
        {/* <ul>
          {this.state.masterCarList.map((car) => (
            <li key={car.id}>
              {car.id} - {car.Make} - {car.Model} - {car.ImageURLs[0].value}{" "}
              -IMAGE-2!!!!!: {car.ImageURLs[1].value}
            </li>
          ))}
        </ul> */}

        <div className="wrapperNew">
                 
          {currentlyVisibleForm}
          <br></br>
          <br></br>
          </div>
          {renderForm2}        
          <div>
          <br></br>
          <br></br>
            <button className="btn btn-success button" onClick={this.handleClickCars}> {buttonText}</button>
          </div>      
      </React.Fragment>
    );
  }
}

CarControl.propTypes = {
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

CarControl = connect(mapStateToProps)(CarControl);

export default CarControl;
