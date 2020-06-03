import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import "./Keg.css";

function EditKegForm(props) {
  const { keg } = props;
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPrice: event.target.kegPrice.value,
      kegFlavor: event.target.kegFlavor.value,
      pintQty: keg.pintQty,
      id: keg.id,
      disableButton: keg.disableButton,
      alertMessage: keg.alertMessage,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg"
      />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func,
};

export default EditKegForm;
