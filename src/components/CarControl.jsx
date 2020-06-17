import "./Car.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "../actions";
import Pagination from "./Pagination";
import firebase from "../firebase";
import React from "react";
import { paginate } from "../utils/paginate";
import CreateCar from "./CreateCar";
import RenderCar from "./RenderCar";
import SlideShow from "./SlideShow";
import CarDetail from "./CarDetail";
import AboutPage from "./AboutPage";
import "bootstrap/dist/css/bootstrap.css";
import UpdateCar from "./UpdateCar";

class CarControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCarList: [], //Shared State (passed down to KegList.jsx and from there to Keg.jsx)
      editing: false,
      pageSize: 8,
      currentVisibleForm: false,
      selectedCar: null,
      currentPage: 1,
    };
  }

  handleClickCars = () => {
    if (this.state.currentVisibleForm === false) {
      this.setState({ currentVisibleForm: true });
    } else {
      this.setState({ currentVisibleForm: false });
    }
  };

  handleChangingSelectedCar = (id) => {
    const selectedCar = this.state.masterCarList.filter(
      (car) => car.id === id
    )[0];
    // console.log("inside handleChangingSelectedCar - ID of clicked car is ");
    // console.log(selectedCar);
    this.setState({ selectedCar: selectedCar }); //selectedCar will store object from SHARED SHARE masterCarList with a UUID corresponding to clicked car
  };

  handleDeletingKeg = () => {
    const newEditing = false;
    const newSelectedCar = null;
    const newCurrentlyVisibleForm = false;
    this.setState({
      editing: newEditing,
      selectedCar: newSelectedCar,
      currentlyVisibleForm: newCurrentlyVisibleForm,
    });
  };

  handleEditClick = () => {
    // console.log("keg control -  inside  handleEditClick = () => {");
    this.setState({ editing: true });
  };

  handlePageChange = (page) => {
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
        this.setState({
          masterCarList: cars,
          refreshPage: false,
        });
      });
  }

  render() {
    let currentlyVisibleForm = null;
    let renderForm = null;

    const paginationCarArray = paginate(
      this.state.masterCarList,
      this.state.currentPage,
      this.state.pageSize
    );

    if (this.state.editing) {
      // console.log("IN RENDER() - this.state.editing ");
      currentlyVisibleForm = (<UpdateCar car={this.state.selectedCar} buttonText="Update Car"/>);
    } else if (this.state.selectedCar != null) {
      currentlyVisibleForm = (
        <SlideShow selectedCar={this.state.selectedCar} />
      );
      renderForm = <CarDetail selectedCar={this.state.selectedCar} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} />
    } else {
      if (this.state.currentVisibleForm) {
        currentlyVisibleForm = <CreateCar />;
      } else {
        currentlyVisibleForm = (
          <RenderCar className="wrapperNew" carList={paginationCarArray} onCarSelection={this.handleChangingSelectedCar}/>
        );
        renderForm = (
          <Pagination className="pagination" itemsCount={this.state.masterCarList.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        );
      }
    }

    return (
      <React.Fragment>
        <div className="container">
          {currentlyVisibleForm}
          <br></br>
          <br></br>
        </div>
        {renderForm}
        <div>
          <br></br>
          <br></br>
        </div>
      </React.Fragment>
    );
  }
}

CarControl.propTypes = {
  masterKegList: PropTypes.object,
  edit: PropTypes.bool,
  selectedKeg: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    masterCarList: state.masterCarList,
    editing: state.editing,
    currentVisibleForm: state.currentVisibleForm,
    selectedCar: state.selectedCar,
    pageSize: state.pageSize,
    currentPage: state.currentPage,
  };
};

CarControl = connect(mapStateToProps)(CarControl);

export default CarControl;
