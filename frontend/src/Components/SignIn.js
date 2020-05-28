import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
      redirect: false,
    };

    this.handleSingIn = this.handleSingIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSingIn(event) {
    const { username, password } = this.state;

    axios
      .post("http://localhost:9000/users", {
        user: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        console.log(response);
        if (
          username === response.data.username &&
          password === response.data.password
        ) {
          var loggedInUser = {
            id: response.data.id,
            username: response.data.username,
            password: response.data.password,
            newsletter: response.data.newsletter,
          };

          localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

          console.log("Inloggad");
          this.setState({ redirect: true });
        } else console.log("Något gick fel");
      });
    event.preventDefault();
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/Dashboard" />;
    }

    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSingIn}>
            <br></br>
            <br></br>
            Username: <br></br>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            ></input>
            <br></br>
            <br></br>
            Password: <br></br>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.email}
              onChange={this.handleChange}
              required
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Login</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
