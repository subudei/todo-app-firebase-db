import React from "react";
import "./App.css";
import SignUp from "./components/sign-up/signUp";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <h1>Todo App</h1>
      <SignUp />
    </AuthProvider>
  );
}

export default App;
