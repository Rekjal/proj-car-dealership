import firebase from "../firebase";
import React, { useEffect, useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { withFirestore, isLoaded } from "react-redux-firebase"; //"isLoaded" is authrization related
import { v4 } from "uuid";

const db = firebase.firestore();

function LoadDataToFS() {
  const firestore = useFirestore();
  const [fileUrl, setFileURLs] = React.useState([]);
  const [uuID, setUuID] = React.useState();
  const [users, setUsers] = React.useState([]);
  const [imgURLs, setImageURLs] = React.useState([]);
  const [enteredText, setEnteredText] = useState("");
  // const [movies, setMovies] = React.useState([]);

  
    

  const addImageURL = (toAdd) => {
    setImageURLs([
      ...imgURLs,
      {
        id: imgURLs.length,
        value: toAdd,
      },
    ]);
  };

  const emptyImageURL = () => {
    setImageURLs([]);
  };

  const addFileURL = (toAdd2) => {
    setFileURLs([
      ...fileUrl,
      {
        id: fileUrl.length,
        value: toAdd2,
      },
    ]);
  };

  const printValues = (e) => {
    // e.preventDefault();
    console.log("SALIM!!!: Inside printValues");
    console.log(imgURLs, users);
  };

  function addNonImageFieldToFirestore(id) {
    emptyImageURL();
  }

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    addImageURL(await fileRef.getDownloadURL());
    console.log("SALIM!!!!:imgURLs ");
    console.log(imgURLs);
    printValues();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const uuIDTicket = {};
    uuIDTicket.id = v4();
    setUuID(uuIDTicket.id);
    const carMake = e.target.carMake.value;
    const carModel = e.target.carModel.value;
    if (!carMake || !fileUrl || !carModel) {
      return;
    }
    await db.collection("car").doc(uuIDTicket.id).set({
      //"car" is the name of collection
      ImageURLs: imgURLs,
      Make: carMake,
      Model: carModel,
    });

    for (var i = 0; i < 7; i++) {
      document.getElementsByClassName("clearFileFieldOnSubmit")[i].value = "";
    }

    addNonImageFieldToFirestore(uuID);
    // console.log("SALIM!!!carMake:imgExtURL:imgURLs::" + carMake + ":" + imgExtURL + ":" + imgURLs);
  };

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const usersCollection = await db.collection("car").doc("uuID").get();
  //        setUsers(
  //         usersCollection.docs.map((doc) => {
  //           return doc.data();
  //         })
  //       );
  //     };
  //     fetchUsers();
  //     setUuID('');
  //   }, []);

 

  return (
    
    
    <>
 

    
      <form onSubmit={onSubmit}>
        <br></br>
        <input
          type="file"
          className="clearFileFieldOnSubmit"
          onChange={onFileChange}
        />
        <br></br> <br></br>
        <input
          type="file"
          className="clearFileFieldOnSubmit"
          onChange={onFileChange}
        />
        <br></br> <br></br>
        <input
          type="file"
          className="clearFileFieldOnSubmit"
          onChange={onFileChange}
        />
        <br></br> <br></br>
        <input
          type="file"
          className="clearFileFieldOnSubmit"
          onChange={onFileChange}
        />
        <br></br> <br></br>
        <input
          type="file"
          className="clearFileFieldOnSubmit"
          onChange={onFileChange}
        />
        <br></br> <br></br>
        <input
          type="text"
          className="clearFileFieldOnSubmit"
          name="carMake"
          placeholder="Make"
        />
        <br></br> <br></br>
        <input
          type="text"
          className="clearFileFieldOnSubmit"
          name="carModel"
          placeholder="Model"
        />
        <br></br> <br></br>
        <button className="buttonPrimary btn btn-primary" >Submit</button>{" "}
        <br></br> <br></br>
      </form>
     
    </>
  );
}

export default LoadDataToFS;
