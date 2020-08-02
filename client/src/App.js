import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/signin" >
        <Signin />
      </Route>
      <Route exact path="/signup" >
        <Signup />
      </Route>
      <Route exact path="/profile" >
        <Profile />
      </Route>
    </Router>

  );
}


export default App;
