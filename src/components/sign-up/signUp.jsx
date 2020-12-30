import React, { useRef, useState } from "react";
import "./signUp.styles.css";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConnfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConnfirmationRef.current.value) {
      return setError("password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <div className="sign__up__container">
      <h2>Sign Up</h2>
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
        <div className="sign__in__label">
          <label>password confirmation</label>
          <input
            label="password confirmation"
            ref={passwordConnfirmationRef}
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
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <h2>
          Alredy have an acount? <Link to="/login">Log In</Link>
        </h2>
      </div>
    </div>
  );
}

export default SignUp;
