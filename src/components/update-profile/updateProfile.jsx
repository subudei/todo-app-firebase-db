import React, { useRef, useState } from "react";
// import "./signUp.styles.css";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConnfirmationRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConnfirmationRef.current.value) {
      return setError("password do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="sign__up__container">
      <h2>Update Profile</h2>
      {error && <h3>{error}</h3>}
      <form className="sign__up__form" onSubmit={handleSubmit}>
        <div className="sign__in__label">
          <label>email</label>
          <input
            ref={emailRef}
            className="sign__up__inp"
            type="email"
            required
            defaultValue={currentUser.email}
          />
        </div>
        <div className="sign__in__label">
          <label>password</label>
          <input
            ref={passwordRef}
            className="sign__up__inp"
            type="password"
            placeholder="leave blank to keep the same"
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
            placeholder="leave blank to keep the same"
          />
        </div>
        <div>
          <button
            className="sign__up__btn"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </form>
      <div>
        <h2>
          <Link to="/">Cancel</Link>
        </h2>
      </div>
    </div>
  );
}

export default UpdateProfile;
// 51
