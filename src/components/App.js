import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
// import Header from "./common/Header";
import Navbar from "./common/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {

  return (
    <div className="container-fluid">
      <Navbar />
      {/* <Header /> */}

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Redirect from="/about-page" to="about" />
       
      </Switch>
    </div>
  );
}

export default App;
