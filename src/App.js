import React from "react";
import "./App.css";
import SignUp from "./components/sign-up/signUp";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/login/login";
import Home from "./components/home/home";
import PrivateRoute from "./components/private-route/privateRoute";
import ForgotPassword from "./components/forgot-password/forgotPassword";
import UpdateProfile from "./components/update-profile/updateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
