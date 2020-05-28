import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
//import "./Style.css";
import Registration from "./Components/Registration";
import SignIn from "./Components/SignIn";
import Header from "./Components/Layout/Header";
import Dashboard from "./Components/Dashboard";
//import Dashboard from "./Components/Dashboard";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header></Header>
          <Route path="/Registration" component={Registration}></Route>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/Dashboard" component={Dashboard}></Route>
        </Router>
      </div>
    );
  }
}
