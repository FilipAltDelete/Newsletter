import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
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

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/admin")
      .then((res) => resizeTo.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount(){
    this.callAPI();
  }
}
*/

/*

function App() {
  return (
    <div className="App">
      <Registration></Registration>
    </div>
  );
}

export default App;

*/
