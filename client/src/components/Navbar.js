import React, { useContext } from "react";
import { AppContext } from "../context api/Appcontext";
import { Button } from "semantic-ui-react";

export default function Navbar() {
  const { user } = useContext(AppContext);
  const logout = () => {
    window.location.reload();
  };
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        <h2>
          <strong>Vidco</strong>
        </h2>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          {/* <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li> */}
          {user._id ? (
            <a
              onClick={logout}
              class="nav-link btn btn-outline-light"
              style={{ color: "white" }}
              href="#"
            >
              Logout
            </a>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
