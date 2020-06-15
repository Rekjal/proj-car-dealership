import React from "react";
import PropTypes from "prop-types";
import "./Car.css";
import "bootstrap/dist/css/bootstrap.css";
// import "./../img/carfax_logo.png";


function CarDetail(props) {
  const { selectedCar } = props;
  const featureList = selectedCar.Features.split(",");
  const basics = selectedCar.Basics;
  const basicsKeys = Object.keys(basics);
  const carFax = "https://www.carfax.com/VehicleHistory/p/Report.cfx?partner=VAU_0&UID=C520459&vin=";
  const apostope = "";
  const carFaxURL = carFax.concat(basics.VIN, apostope);
  const safetyRecall = "https://www.nhtsa.gov/recalls?vin=";
  const safetyRecallURL = safetyRecall.concat(basics.VIN, apostope);



  return (
    <React.Fragment>
      <div className="kegDetail coralColor">
      <table className = "table">
      <tbody>
        <tr>
          <td><span className="muchMoreWeight">{selectedCar.Year} {selectedCar.Make} {selectedCar.Model} </span></td>
          <td><span className="muchMoreWeight textAlignRight" >${selectedCar.Price.toLocaleString()}</span></td>
          </tr> 
		  <tr>
          <td><span className="notMuchMoreWeight">{selectedCar.Trim} | {selectedCar.Miles.toLocaleString()} miles</span></td>
          <td><span className="notMuchMoreWeight ">Payment Calculator $ {Math.round(selectedCar.Price/36)}/month (For 36 months)</span></td>
           </tr>
      </tbody>
    </table>
    <div className="horizontalLine"></div>
        <h3 className="alignLeft">Car Details</h3>
        <div className="modal-body row vroomColor">
          {basicsKeys.map((key) => (
           <div className="col-md-5"><span className="moreWeight">{key}</span>: {basics[key]}</div>
           ))}
        </div>
      
       <div className="vroomColor morePadding">Clean Auto History:<img className ="tempImage" src={require('./carfax_logo2.png')} />
        This vehicle has a clean history and is free of accidents as reported by CARFAX.     
        <a href={carFaxURL} target="_blank"> See the report</a> 
        </div>
       <div>
          <a className="vroomColor morePadding" href={safetyRecallURL} target="_blank"  >Check for safety recalls</a> 
          </div>      
        <div className="horizontalLine"></div>
        <h3 className="alignLeft">Features</h3>
        <div className="modal-body row vroomColor">
          {featureList.map((feature) => (
            <div className="col-md-4">{feature}</div>
          ))}
        </div>
        >
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
