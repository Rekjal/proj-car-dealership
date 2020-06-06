import firebase from "./../firebase";
import React, { useEffect, useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { withFirestore, isLoaded } from "react-redux-firebase"; //"isLoaded" is authrization related
import { v4 } from "uuid";

const db = firebase.firestore();

function LoaderUnloader() {
  const firestore = useFirestore();
  const [fileUrl, setFileURLs] = React.useState([]);
  const [emptyImageURLs, setEmptyImageURLs] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [imgURLs, setImageURLs] = React.useState([]);

  //   const newMasterKegList = this.state.masterKegList.concat(newKeg);
  //     this.setState({
  //       masterKegList: newMasterKegList,
  //       formToRender: false,
  //     });
  // kegList.map((keg) => (

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
    // add record to FireStore
    // event.preventDefault();
    // return firestore.collection("car").doc(id).add({
    //   imgFrontExterior: fileUrl,
    // });
    emptyImageURL();
  }

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    console.log("SALIM-onFileChange::file ");
    console.log(file);
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    addImageURL(await fileRef.getDownloadURL());
    console.log("SALIM!!!!:fileUrl ");
    console.log("SALIM-Printing state value");
    console.log(imgURLs);
    printValues();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const uuIDTicket = {};
    uuIDTicket.id = v4();
    const carMake = e.target.carMake.value;
    if (!carMake || !fileUrl) {
      return;
    }
    await db.collection("car").doc(uuIDTicket.id).set({ //"car" is the name of collection
      ImageURLs: imgURLs,
      Make: carMake,
    },
     );
    const target = { a: 1, b: 2 };
    const returnedTarget = Object.assign({}, target, target);
    // emptyImageURL(); //empty State stores "Storage URls"    
    //  Make: carMake,
    addNonImageFieldToFirestore(uuIDTicket.id);
    // console.log("SALIM!!!carMake:imgExtURL:imgURLs::" + carMake + ":" + imgExtURL + ":" + imgURLs);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("car").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <tr>
            {" "}
            <td>
              <input type="file" onChange={onFileChange} />{" "}
            </td>
            <td>
              {" "}
              <input type="file" onChange={onFileChange} />{" "}
            </td>
            <td>
              {" "}
              <input type="text" name="carMake" placeholder="Make" />
            </td>
            <td>
              {" "}
              <button>Submit</button>{" "}
            </td>
          </tr>
        </table>
      </form>
      {/* <ul>
        {users.map((user) => {
          return (
            <li key={user.Make}>
              <img
                width="100"
                height="100"
                src={user.ImageURLs}
                alt={user.Make}
              />
              <p>{user.Make}</p>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default LoaderUnloader;
