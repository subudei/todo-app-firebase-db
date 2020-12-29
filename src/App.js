import React from "react";
import "./App.css";
import SignUp from "./components/sign-up/signUp";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <h1>Todo App</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
