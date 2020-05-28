import React from "react";
import axios from "axios";

export default function Dashboard() {
  var user = JSON.parse(localStorage.getItem("loggedInUser"));
  var putNews;
  const handleNewsletter = () => {
    if (user.newsletter === false) {
      putNews = true;
    } else {
      putNews = false;
    }
    axios.put("http://localhost:9000/UpdateUser/" + user.id, {
      userPut: {
        id: user.id,
        username: user.username,
        password: user.password,
        newsletter: putNews,
      },
    });
  };
  if (!user.newsletter) {
    return (
      <div>
        <br></br>
        <br></br>
        Welcome {user.username}!<br></br>
        <br />
        <div>
          <h3>Do you want to activate newsletter?</h3>
          <input
            type="button"
            value="Activate"
            onClick={handleNewsletter}
          ></input>
        </div>
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <br></br>
        <br></br>
        Welcome {user.username}!<br></br>
        <br />
        <div>
          <h3>Do you want to deactivate newsletter?</h3>
          <input
            type="button"
            value="Deactivate"
            onClick={handleNewsletter}
          ></input>
        </div>
        <br />
      </div>
    );
  }
}

/*
import React, { Component } from "react";

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        var user = localStorage.getItem("loggedInUser");
    }
    render() {
    const handleLogout = () => {
      //props.history.push("/login");
    };
    return (
      <div>
        <br></br>
        <br></br>
    Welcome {user}!
        <br />
        <br />
        <input type="button" onClick={handleLogout} value="Logout" />
      </div>
    );
  }
}
*/
/*
function Dashboard(props) {
  // handle click event of logout button
  const handleLogout = () => {
    props.history.push("/login");
  };

  return (
    <div>
      Welcome User!
      <br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
*/
