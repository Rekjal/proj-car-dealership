import React from "react";
import Like from "./Like";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "react-redux-firebase"; //"isLoaded" is authrization related

function RenderCar(props) {
  const myStyledComponentStyles = {
    backgroundColor: "#ecf0f1",
    fontFamily: "Segoe UI",
    paddingRight: "0px",
    paddingBottom: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
    maxWidth: "100%",
    height: "auto",
    paddingLeft: "4px",
    // wdth: "100%",
  };

  // console.log("SALIM: Inside FETCHDATAFROMFS: carList IS ");
  // console.log(props.carList);

  return (
    <React.Fragment>
      <div className="wrapperNew">
        {props.carList.map(indiCounter => {
          return (
            // <React.Fragment>
            <div key={indiCounter.id} className="container row col-lg-4 col-sm-6">
              <div onClick={() => props.onCarSelection(indiCounter.id)}>
                
                <div className="thumbnail">
                  <img style={myStyledComponentStyles} src={indiCounter.ImageURLs[0].value} alt=""></img>
                  <p className="moreWeight">
                    {indiCounter.Year} {indiCounter.Make} {indiCounter.Model}
                  </p>
                  <p className="lessWeight">
                    {indiCounter.Trim} | {indiCounter.Miles.toLocaleString()}{" "}
                  miles
                </p>
                  <p className="moreWeight">
                    ${indiCounter.Price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>


            // </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
  // If the tickets aren't loaded yet, our fragment will return a "Loading..." message.
}

// else {
//   return (
//     <React.Fragment>
//       <h3>Loading...</h3>
//     </React.Fragment>
//   );
// }

RenderCar.propTypes = {
  carList: PropTypes.array.isRequired,
};

export default RenderCar;
