import React, { Component, useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import CreatePost from "./pages/Createpost";
import { reducer, initialState } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    //console.log(typeof(user),user);
    if (user) {
      dispatch({ type: "USER", payload: user });
      history.push("/");
    }
    else {
      history.push("/signin");
    }
  }, [])
  return (
    <Switch>
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
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Nav />
        <Routing />
      </Router>
    </UserContext.Provider>
  );
}


export default App;
