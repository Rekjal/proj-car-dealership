import React from "react";
import PropTypes from "prop-types";
import "./Car.css";
import { useFirestore } from "react-redux-firebase"; //useFirestore is a HOOK needed for UPDATING Record in DB

function UpdateCar(props) {
  const { car, buttonText } = props;
  const firestore = useFirestore(); //call useFirestore() function and save our Firestore reference in a constant called firestore

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    // onEditCar({
    const updatedCar = {
      Make: event.target.Make.value,
      Model: event.target.Model.value,
      Miles: event.target.Miles.value,
      Price: event.target.Price.value,
      Trim: event.target.Trim.value,
      Year: event.target.Year.value,
      Basics: {
        BodyType: event.target.BodyType.value,
        Engine: event.target.Engine.value,
        Exterior: event.target.Exterior.value,
        MPG: event.target.MPG.value,
        Transmission: event.target.Transmission.value,
        VIN: event.target.VIN.value,
      },
      Features: event.target.Features.value,
    };
    console.log("slected car & updatedCar are ");
    console.log(car.id);
    console.log(updatedCar);
    console.log("slected car & updatedCar done ");

    return firestore.update(
      { collection: "car", doc: car.id },
      updatedCar
    ); //Firestore will merge the two arg objects

  }

  return (
    <React.Fragment>
      <br></br> <br></br> <br></br>
      <div className="reUsableKegFormh2">
        <h2>{buttonText} Record</h2></div>
      <div className="reUsableKegForm coralColor container">
        <form onSubmit={handleEditKegFormSubmission}><table className="table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Current Value</th>
              <th>New Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Make</td>
              <td style={{ color: "coral" }}>{car.Make}</td>
              <td><input required type="text" name="Make" placeholder="New Make" /></td>
            </tr>
            <tr>
              <td>Model</td>
              <td style={{ color: "coral" }}>{car.Model}</td>
              <td><input required type="text" name="Model" placeholder="New Model" /></td>
            </tr>
            <tr>
              <td>Miles</td>
              <td style={{ color: "coral" }}>{car.Miles.toLocaleString()}</td>
              <td><input required type="text" name="Miles" placeholder="New Miles" /></td>
            </tr>
            <tr>
              <td>Price</td>
              <td style={{ color: "coral" }}>${car.Price.toLocaleString()}</td>
              <td><input required type="text" name="Price" placeholder="New Price" /></td>
            </tr>
            <tr>
              <td>Trim</td>
              <td style={{ color: "coral" }}>{car.Trim}</td>
              <td><input required type="text" name="Trim" placeholder="New Trim" /></td>
            </tr>
            <tr>
              <td>Year</td><td style={{ color: "coral" }}>{car.Year}</td>
              <td><input required type="text" name="Year" placeholder="New Year" /></td>
            </tr>
            <tr>
              <td>Body Type</td>
              <td style={{ color: "coral" }}>{car.Basics.BodyType}</td>
              <td><input required type="text" name="BodyType" placeholder="New Body Type" /></td>
            </tr>
            <tr>
              <td>Engine</td>
              <td style={{ color: "coral" }}>{car.Basics.Engine}</td>
              <td><input required type="text" name="Engine" placeholder="New Engine" /></td>
            </tr>
            <tr>
              <td>Exterior</td>
              <td style={{ color: "coral" }}>{car.Basics.Exterior}</td>
              <td><input required type="text" name="Exterior" placeholder="New Exterior" /></td>
            </tr>
            <tr>
              <td>MPG</td>
              <td style={{ color: "coral" }}>{car.Basics.MPG}</td>
              <td><input required type="text" name="MPG" placeholder="New MPG" /></td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td style={{ color: "coral" }}>{car.Basics.Transmission}</td>
              <td><input required type="text" name="Transmission" placeholder="New Transmission" /></td>
            </tr>
            <tr>
              <td>VIN</td>
              <td style={{ color: "coral" }}>{car.Basics.VIN}</td>
              <td><input required type="text" name="VIN" placeholder="New VIN" /></td>
            </tr>
            <tr>
              <td>Features</td>
              <td style={{ color: "coral" }}>{car.Features}</td>
              <td><input required type="text" name="Features" placeholder="New Features" /></td>
            </tr>
          </tbody>
        </table>
          <button className="buttonPrimary btn btn-primary" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

UpdateCar.propTypes = {
  car: PropTypes.object,
  buttonText: PropTypes.string,
};

export default UpdateCar;