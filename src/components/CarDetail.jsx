import React from "react";
import PropTypes from "prop-types";
import "./Car.css";
import "bootstrap/dist/css/bootstrap.css";

function CarDetail(props) {
  const { selectedCar } = props;
  // console.log("in CARDETAILS - car is ");
  // console.log(selectedCar);

  const featureList = selectedCar.Features.split(",");

  return (
    <React.Fragment>
      <div className="kegDetail coralColor">
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <h3>
                  <div className="vroomColor">
                    {selectedCar.Year} {selectedCar.Make} {selectedCar.Model}
                  </div>
                </h3>
              </td>
              <td>
                <h3>
                  <div className="vroomColor">${selectedCar.Price}</div>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  <div className="vroomColor">
                    {selectedCar.Trim} | {selectedCar.Miles} miles
                  </div>
                </h3>
              </td>
              <td>
                <h3>
                  <div className="vroomColor">
                    Payment Calculator ${selectedCar.Price / 36}
                    <div className="black">ID: </div>
                    {selectedCar.id}
                  </div>
                </h3>
              </td>
              {/* <td>
                <h3>
                  <div className="vroomColor">
                    {featureList.map((feature) => ({ feature }))}
                  </div>
                </h3>
              </td> */}
            </tr>
          </tbody>
        </table>

        {/* {featureList.map(feature => {
                Features {feature}
              })}; */}

        {/* <div className="kegDetailButton coralColor">
        <button className="btn btn-warning" onClick={props.onClickingEdit}>
          Update Car
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onClickingDelete(car.id)}
        >
          Delete Car
        </button>
      </div> */}
      </div>
    </React.Fragment>
  );
}

CarDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default CarDetail;
