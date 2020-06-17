import React from "react";
import CarControl from "./CarControl";
import NavigationBar from "./NavigationBar";
import CreateCar from "./CreateCar";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //router related
import Form from "./Form";
import FooterPage from "./FooterPage";
import "./Car.css";
import AboutPage from "./AboutPage";

function App() {
  return (
    <Router>
      <div className="container">
        <NavigationBar /> {/* Navbar is outside of <Switch> component */}
        <main className="container">
          <Switch> {/* switch component is like a conditional - it will render only one of the routes contained inside */}
            <Route path="/signin"> {/* the path should always begin with a / (just like an actual path in a URL). */}
              <Signin />
            </Route>
            <Route path="/createcar">
              <CreateCar />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <CarControl />
            </Route>
            <Route path="/email">
              <Form />
            </Route>
          </Switch>
        </main>
        <FooterPage />
      </div>
    </Router>

    // <React.Fragment>
    //   <Header />
    //   <KegControl />
    // </React.Fragment>
  );
}

export default App;
