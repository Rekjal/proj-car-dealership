import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //router related

function App(){
  return ( 
    <Router>
    <Header />   {/* Header is outside of <Switch> component */}
    
     <Switch>  {/* switch component is like a conditional - it will render only one of the routes contained inside */}
      <Route path="/signin">  {/* the path should always begin with a / (just like an actual path in a URL). */}
        <Signin />
      </Route>
      <Route path="/">
      <KegControl />
      </Route>
    </Switch>
  </Router>

    // <React.Fragment>
    //   <Header />
    //   <KegControl />
    // </React.Fragment>
  );
}

export default App;