import { useSelector } from "react-redux"; //hook allows us to extract data from a Redux store.
import { useFirestoreConnect, isLoaded } from "react-redux-firebase"; //hook allows us to listen for changes to Firestore without using an HOC in a class component.
import PropTypes from "prop-types";
import React from "react";
import LoaderUnloader from "./LoaderUnloader"
// import NavBar from "./NavBar"
// We need to import hooks functionality from both react-redux and react-redux-firebase.

function GetDataInRealTime(props) {  // 
  useFirestoreConnect([{ collection: "car" }]); //#####The useFirestoreConnect() hook comes from react-redux-firebase. -specify the collection or documents we want to listen to in Firestore.
  const car = useSelector((state) => state.firestore.ordered.car); //firestoreReducer passes data into a firestore data slice - from there grab state.firestore.tickets. save our collection in a constant called counter.
  if (isLoaded(car)) {
    const objPerf = car.map(
        // (i) =>[...i.PERFORMANCE, ...i.BASICS, ...i.AUTO_HISTORY],
        (i) =>i.PERFORMANCE,
      );
      const objBasic = car.map(
        (i) =>i.BASICS,
      );  
      const objAutoHistory = car.map(
        (i) =>i.AUTO_HISTORY,
      );  
      const objImages = car.map(
        (i) =>i.Images,
      );  
      const objAll = [...objPerf, ...objBasic, ...objAutoHistory, ...objImages];
      console.log("My object is");
    console.log('My object: ', objAll);

    //const base64 = btoa(str);
  //const decoded = atob(base64);

    return (
      <React.Fragment>
        <hr />
        <LoaderUnloader />
        {car.map((indiCounter) => {
          return (
            <React.Fragment>
                {/* <NavBar/> */}
              <p>
              {/* const decoded = atob(indiCounter.Images.Generic); */}
              {/* Image={atob(indiCounter.Images.Generic)} */}
              {/* image ={indiCounter.Images.Generic} */}
              {/* image = {window.atob(indiCounter.Images.Generic)} */}
              </p>
              {/* <img src={indiCounter.Images.Generic} alt = "image"/> */}
              <p>
              {/* Clean Auto History={indiCounter.AUTO_HISTORY.Clean_Auto_History} */}
              </p>
              <p>
              {/* Number Of Owners={indiCounter.AUTO_HISTORY.Number_Of_Owners} */}
              </p>
              id={indiCounter.id}
             
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
    
        
// };

    // If the tickets aren't loaded yet, our fragment will return a "Loading..." message.
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

GetDataInRealTime.propTypes = {
  onTicketSelection: PropTypes.func,
};

export default GetDataInRealTime;
