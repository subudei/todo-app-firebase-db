import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out!");
    }
  }
  return (
    <div>
      <h1>HOME page</h1>
      <div>
        <h2>Profile</h2>
        {error && <h2>{error}</h2>}
        <h3>Email:</h3> {currentUser.email}
      </div>
      <Link to="/update-profile">Update Profile</Link>

      <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
}

export default Home;
