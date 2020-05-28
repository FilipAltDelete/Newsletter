import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { username, email, password, password_confirmation } = this.state;

    axios.post("http://localhost:9000/CreateUser", {
      user: {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    });

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <br></br>
            <br></br>
            New User: <br></br>
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
            New Email: <br></br>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
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
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
            <br></br>
            <br></br>
            Confirm : <br></br>
            <input
              type="password"
              name="password_confirmation"
              placeholder="Password Confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Register</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
