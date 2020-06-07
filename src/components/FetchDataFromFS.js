import firebase from "./../firebase";
import React, { Component, useEffect, useState } from "react";
import { useFirestore, withFirestore, useFirestoreConnect, isEmpty, isLoaded } from "react-redux-firebase"; //"isLoaded" is authrization related
import { useSelector } from 'react-redux'

function FetchDataFromFS(props) {
    useFirestoreConnect([{ collection: "car" }]); //#####The useFirestoreConnect() hook comes from react-redux-firebase. -specify the collection or documents we want to listen to in Firestore.
    const counter = useSelector((state) => state.firestore.ordered.car); //firestoreReducer passes data into a firestore data slice - from there grab state.firestore.tickets. save our collection in a constant called counter.
    if (isLoaded(counter)) {
      return (
        <React.Fragment>
          <hr />
          {counter.map((indiCounter) => {
            return (
              <React.Fragment>
                <p>
                 UU ID = {indiCounter.id}
                </p>
                <p>
                  Car Make={indiCounter.Make}
                </p>  
                <p>
                  Car Model={indiCounter.Model}
                </p>
 
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
      // If the tickets aren't loaded yet, our fragment will return a "Loading..." message.
    } else {
      return (
        <React.Fragment>
          <h3>Loading...</h3>
        </React.Fragment>
      );
    }
  }

FetchDataFromFS.propTypes = {
  //   onTicketSelection: PropTypes.func,
};

export default FetchDataFromFS;
