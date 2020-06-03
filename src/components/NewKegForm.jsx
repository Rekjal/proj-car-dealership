import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPrice: event.target.kegPrice.value,
      kegFlavor: event.target.kegFlavor.value,
      alertMessage2: null,
      pintQty: 15,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add New Keg!"
      />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
