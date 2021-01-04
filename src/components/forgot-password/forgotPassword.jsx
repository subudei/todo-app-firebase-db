import React, { useRef, useState } from "react";
import "../sign-up/signUp.styles.css";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructiones");
    } catch {
      setError("Failed to Reset Password!");
    }
    setLoading(false);
  }

  return (
    <div className="sign__up__container">
      <h2>Password Reset</h2>
      {error && <h3 className="error__message">{error}</h3>}
      {message && <h3 className="confirmation__message">{message}</h3>}
      <form className="sign__up__form" onSubmit={handleSubmit}>
        <div className="sign__up__field">
          <label className="sign__up__label">email</label>
          <input
            ref={emailRef}
            className="sign__up__inp"
            type="email"
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
            Reset Password
          </button>
        </div>
        <div className="password__secondary__links">
          <Link to="/login">
            <button className="secondary__btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="secondary__btn">Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
