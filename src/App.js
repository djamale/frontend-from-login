import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Daftar from "./pages/FormDaftar";
import Masuk from "./pages/FormMasuk";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          {/* <div className="App__Aside" /> */}
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/Masuk"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Masuk
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Daftar
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/Masuk"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Masuk
              </NavLink>{" "}
              atau{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Daftar
              </NavLink>
            </div>

            <Route exact path="/" component={Daftar} />
            <Route path="/Masuk" component={Masuk} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
