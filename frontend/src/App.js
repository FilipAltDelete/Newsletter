import React, { Component } from "react";
import Registration from "./Components/Registration";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration></Registration>
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
