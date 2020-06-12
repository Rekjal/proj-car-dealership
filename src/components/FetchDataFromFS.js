import firebase from "./../firebase";
import React, { Component, useEffect, useState } from "react";
import Like from "./Like";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../node_modules/font-awesome/css/font-awesome.min.css";

import {
  useFirestore,
  withFirestore,
  useFirestoreConnect,
  isEmpty,
  isLoaded,
} from "react-redux-firebase"; //"isLoaded" is authrization related
import { useSelector } from "react-redux";

function FetchDataFromFS(props) {
  //const FetchDataFromFS = (props) => {
  const myStyledComponentStyles = {
    backgroundColor: "#ecf0f1",
    fontFamily: "Calibre-Semibold",
    // paddingTop: "5px",
    // marginTop: "1px",
    // border: "1px",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingBottom: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
    maxWidth: "100%",
    height: "auto",
  };

  console.log("SALIM: Inside FETCHDATAFROMFS: carList IS ");
  console.log(props.carList);

  return (
    <React.Fragment>
      {props.carList.map(indiCounter => {
        return (
          <React.Fragment>
            <div className="KegCard vroomColor">
              {/* <div className="divAlign" onClick={() => whenKegClicked(id)}> */}
              <div className="divAlign">
                <p>
                  <img
                    style={myStyledComponentStyles}
                    src={indiCounter.ImageURLs[0].value}
                    width="370"
                    height="200"
                    alt="First image"
                  ></img>
                </p>
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
                <Like liked={true} />
                {/* <div>
                    <FontAwesomeIcon icon={faHome} />
                  </div> */}
              </div>
            </div>
          </React.Fragment>
        );
      })}
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

FetchDataFromFS.propTypes = {
  //   onTicketSelection: PropTypes.func,
};

export default FetchDataFromFS;
