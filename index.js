import React, { Component } from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Hello from "./Hello";
import "./style.css";
import {Login} from './login';
import {Home} from './home';
import {Logout} from './logout';
//https://reacttraining.com/react-router/web/api/Route
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/logout" component={Logout}/>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
