import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import {Navbar} from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

// check token
if (localStorage.jwtToken) {
  const jwt_t = localStorage.jwtToken;
  setAuthToken(jwt_t);
  const decoded = jwt_decode(jwt_t);
  store.dispatch(setUser(decoded));
  if (decoded.exp < Date.now() / 1000) {
    // expired
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App" >
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
