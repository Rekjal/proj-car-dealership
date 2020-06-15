import React from "react";
import firebase from "firebase/app"; //auth related -  give us access to firebase.auth() methods
import "./Car.css";
import "bootstrap/dist/css/bootstrap.css";

function Signin() {
  function doSignUp(event) {
    event.preventDefault(); //prevent the default behavior of submitting a form (a page reload).
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        //createUserWithEmailAndPassword() returns a promise, which means we can attach then to it.
        console.log("successfully signed up!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        //we are using the firebase.auth().signInWithEmailAndPassword() method.
        console.log("Successfully signed in!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        //We use the firebase.auth().signOut() method, which also returns a promise.
        console.log("Successfully signed out!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>

      <div className="signIn">
        <br></br><br></br><br></br><br></br>
        <form onSubmit={doSignUp}>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="btn btn-info btn-sm" type="submit">Sign up</button>
        </form>
        <br></br><br></br>
        <form onSubmit={doSignIn}>
          <input type="text" name="signinEmail" placeholder="email" />
          <input type="password" name="signinPassword" placeholder="Password" />
          <button className="btn btn-info btn-sm" type="submit">Sign in</button>
        </form>
        <br></br><br></br>
        <button className="btn btn-danger lotsOfMargin" onClick={doSignOut}>Sign out</button>
      </div>

      {/* </div> */}
    </React.Fragment >
  );
}

export default Signin;
