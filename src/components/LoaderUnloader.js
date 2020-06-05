import firebase from "./../firebase";
import React, { useEffect, useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { withFirestore, isLoaded } from "react-redux-firebase"; //"isLoaded" is authrization related


const db = firebase.firestore();

function LoaderUnloader() {
  const firestore = useFirestore();
  const [fileUrl, setFileUrl] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [imgExtFrontURL, setExtFrontURL] = React.useState([]);


//   const newMasterKegList = this.state.masterKegList.concat(newKeg);
//     this.setState({
//       masterKegList: newMasterKegList,
//       formToRender: false,
//     });
// kegList.map((keg) => (

    const addItem = (temp) => {
        setExtFrontURL([
          ...imgExtFrontURL,
          {
            id: imgExtFrontURL.length,
            value: temp,
          }
        ]);
      };

      const addFileURL = (temp2) => {
        setFileUrl([
          ...fileUrl,
          {
            id: fileUrl.length,
            value: temp2,
          }
        ]);
      };

      const printValues = e => {
        // e.preventDefault();
        console.log("SALIM!!!: Inside printValues");
        console.log(imgExtFrontURL, users);
      };


  function addTicketToFirestore() { // add record to FireStore    
    // event.preventDefault();
    // var cityRef = db.collection('car').doc('BJ');
    // return firestore.collection("car").doc("oXh7mngaboRciMHgusyT").add({
    return firestore.collection("car").add({
      imgFrontExterior: fileUrl,
       //imgFrontExterior2: imgExtFrontURL[1],
       //newfield: "moment of truth",
       //make: carMake,
    });
  }


  const onFileChange = async (e) => {
    const file = e.target.files[0];
    console.log("SALIM-onFileChange::file ");
    console.log(file);
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    // await fileRef.put(file);
    // setFileUrl(await fileRef.getDownloadURL());
    // console.log("SALIM!!!!:fileUrl ");
    // console.log(fileUrl);

    // for(var i =0; i< file.length; i++) {
        // var fileRef = storageRef.child(file[i].name);
        await fileRef.put(file);  
        addFileURL(await fileRef.getDownloadURL());
        console.log("SALIM!!!!:fileUrl ");
        console.log(fileUrl);
        addItem(await fileRef.getDownloadURL());
        console.log("SALIM-Printing state value");
        console.log(imgExtFrontURL);
        // setExtFrontUrl(await fileRef.getDownloadURL()); 
    // }
    printValues();

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("car").doc(username).set({ //"car" is the name of collection
      name: username,
      avatar: fileUrl,
    });
    addTicketToFirestore();
    // console.log("SALIM!!!carMake:imgExtURL:imgExtFrontURL::" + carMake + ":" + imgExtURL + ":" + imgExtFrontURL);
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
        <input type="file" onChange={onFileChange} />
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
        <button>Submit</button>
      </form>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              <img width="100" height="100" src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default LoaderUnloader;