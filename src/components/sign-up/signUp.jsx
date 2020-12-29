import React, { useRef } from "react";
import "./signUp.styles.css";

import { useAuth } from "../../contexts/authContext";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConnfirmationRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.prevent.default();

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className="sign__up__container">
      <form className="sign__up__form">
        <h2>Sign Up</h2>
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
          <button className="sign__up__btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <h2>Alredy have an acount</h2>
      </div>
    </div>
  );
}

export default SignUp;
