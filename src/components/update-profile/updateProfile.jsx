import React, { useRef, useState } from "react";
import "../sign-up/signUp.styles.css";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";
// import { db } from "../../firebase";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();
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
    // if (userNameRef.current.value !== null) {
    //   db.collection("users").doc(currentUser.uid).collection("usersInfo").doc(currentUser.userName);
    // }

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
    <div className="main__container">
      <div className="circle__one" />
      <div className="circle__two" />
      <div className="sign__up__container">
        <h2 className="sign__up__title">Update Profile</h2>
        {error && <h3 className="error__message">{error}</h3>}
        <form className="sign__up__form" onSubmit={handleSubmit}>
          <div className="sign__in__label">
            <input
              ref={emailRef}
              className="sign__up__inp"
              type="email"
              required
              defaultValue={currentUser.email}
            />
          </div>
          <div className="sign__in__label">
            <input
              ref={passwordRef}
              className="sign__up__inp"
              type="password"
              placeholder="create new password"
            />
          </div>
          <div className="sign__in__label">
            <input
              label="password confirmation"
              ref={passwordConnfirmationRef}
              className="sign__up__inp"
              type="password"
              required
              placeholder="confirm new password"
            />
          </div>
          <div className="btns__update__profile">
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
            <div>
              <Link to="/">
                <button className="sign__up__btn">Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
// 51
