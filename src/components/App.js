import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import NavBar from "./NavBar";

import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //router related

function App(){
  return ( 
    <Router>
    <NavBar />  {/* Navbar is outside of <Switch> component */}
    <main className = "container"> 
     <Switch>  {/* switch component is like a conditional - it will render only one of the routes contained inside */}
      <Route path="/signin">  {/* the path should always begin with a / (just like an actual path in a URL). */}
        <Signin />
      </Route>
      <Route path="/">
     
      <KegControl />
      </Route>
    </Switch>
    </main>
  </Router>


    // <React.Fragment>
    //   <Header />
    //   <KegControl />
    // </React.Fragment>
  );
}

export default App;