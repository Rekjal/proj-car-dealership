import React from "react";
import PropTypes from "prop-types";
import "./Keg.css";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="reUsableKegForm coralColor">
        <h3>{props.buttonText}</h3>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            required
            type="text"
            name="kegName"
            placeholder="Enter Keg Name"
          />
          <input
            required
            type="text"
            name="kegBrand"
            placeholder="Enter Keg Brand"
          />
          <input
            required
            type="number"
            name="kegPrice"
            placeholder="Enter Keg Price ($)"
          />
          <input
            required
            type="text"
            name="kegFlavor"
            placeholder="Enter Keg Flavor"
          />
          <button className="buttonPrimary btn btn-primary" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
