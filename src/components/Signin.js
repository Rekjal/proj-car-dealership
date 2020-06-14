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
{/* 
        <form className="form-inline">
  <div className="form-group mb-2">
    <label for="staticEmail2" className="sr-only">Email</label>
    <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
</form> */}


        <form onSubmit={doSignUp}>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="btn btn-info btn-sm" type="submit">Sign up</button>
        </form>
        <br></br><br></br>
        <form onSubmit={doSignIn}>
          <input type="text" name="signinEmail" placeholder="email" />
          <input type="password" name="signinPassword" placeholder="Password" />
          <button class="btn btn-info btn-sm" type="submit">Sign in</button>
        </form>
        <br></br><br></br>
        <button className="btn btn-danger lotsOfMargin" onClick={doSignOut}>Sign out</button>
      </div>
    </React.Fragment>
  );
}

export default Signin;
