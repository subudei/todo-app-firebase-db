import React, { useRef, useState } from "react";
import "../sign-up/signUp.styles.css";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div className="sign__up__container">
      <h2>Log In</h2>
      {error && <h3>{error}</h3>}
      <form className="sign__up__form" onSubmit={handleSubmit}>
        <div className="sign__in__label">
          <label>email</label>
          <input
            ref={emailRef}
            className="sign__up__inp"
            type="email"
            required
          />
        </div>
        <div className="sign__in__label">
          <label>password</label>
          <input
            ref={passwordRef}
            className="sign__up__inp"
            type="password"
            required
          />
        </div>
        <div>
          <button
            className="sign__up__btn"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            Log In
          </button>
        </div>
        <Link to="/forgot-password">Forgot Password?</Link>
        <div>
          <h2>
            Need an account? <Link to="/signup">Sign Up</Link>
          </h2>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
