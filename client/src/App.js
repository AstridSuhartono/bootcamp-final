import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import CreatePost from "./pages/Createpost";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/signin" >
        <Signin />
      </Route>
      <Route path="/signup" >
        <Signup />
      </Route>
      <Route path="/profile" >
        <Profile />
      </Route>
      <Route path="/create" >
        <CreatePost />
      </Route>
    </Router>

  );
}


export default App;
