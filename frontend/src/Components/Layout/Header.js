import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Newsletter</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/SignIn">
        Sing In
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/Registration">
        Register new User
      </Link>
    </header>
  );
}
const headerStyle = {
  background: "#5e438d",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
const linkStyle = {
  color: "#fff",
};

export default Header;
