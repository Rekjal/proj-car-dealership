import { useSelector } from "react-redux"; //hook allows us to extract data from a Redux store.
import { useFirestoreConnect, isLoaded } from "react-redux-firebase"; //hook allows us to listen for changes to Firestore without using an HOC in a class component.
import PropTypes from "prop-types";
import React, { useState } from "react";
import LoadDataToFS from "./LoadDataToFS";
import FetchDataFromFS from "./RenderCar";
import firebase from "./../firebase";
// import NavBar from "./NavBar"
// We need to import hooks functionality from both react-redux and react-redux-firebase.

function GetDataInRealTime(props) {
  const [currentVisibleForm, SetCurrentVisibleForm] = React.useState(false);
  const { onKegSelectPintSale, onKegSelection } = props;
  let buttonText = null;
  let renderForm = null;

  const handleClick = () => {
    if (currentVisibleForm === false) {
      SetCurrentVisibleForm(true);
    } else {
      SetCurrentVisibleForm(false);
    }
  };

  var salim = true;

  if (isLoaded(salim)) {
    if (currentVisibleForm) {
      buttonText = "Go to Listing Page";
      renderForm = <LoadDataToFS />;
    } else {
      buttonText = "Go to Data Upload Page";
      renderForm = <FetchDataFromFS />;
    }
    return (
      <React.Fragment>
        {renderForm}
        <br></br>
        <br></br>
        <br></br>
        <button className="btn btn-success button" onClick={handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

GetDataInRealTime.propTypes = {
  onTicketSelection: PropTypes.func.isRequired,
};

export default GetDataInRealTime;
