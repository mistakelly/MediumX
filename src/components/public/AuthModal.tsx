import React from "react";
import "@/styles/public/auth_modal.scss";
import GoogleSvg from "./GoogleSvg";
import EmailSvg from "./EmailSvg";
import PasswordSvg from "./PasswordSvg";
import CancelSvg from "./CancelSvg";
import PersonSvg from "./PersonSvg";
// import { ReactComponent as CancelIcon } from "@/assets/svg/cancel.svg"; // Import SVG as a React component

const SignUpModal = () => {
  return (
    <div className="auth_modal">
      <h1 className="title">Join MediumX</h1>
      <div className="content">
        <a className="btns google__btn" href="#">
          <GoogleSvg />

          <span>Sign up with Google</span>
          <div></div>
        </a>

        <div className="btns email__btn">
          <EmailSvg />
          <span>Sign up with Email</span>
          <div></div>
        </div>

        <div className="btns email__btn">
          <PasswordSvg />
          <span>Signup with passwod only</span>
          <div></div>
        </div>

        <div className="cancel_btn" aria-label="Close modal">
          <CancelSvg />
        </div>

        <div className="footer">
          <p>
            Already have an account?
            <button>Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
};

const SignIn = () => {
  return (
    <div className="auth_modal">
      <h1 className="title">Join MediumX</h1>
      <div className="content">
        <a className="btns google__btn" href="#">
          <GoogleSvg />

          <span>Sign in with Google</span>
          <div></div>
        </a>

        <div className="btns email__btn">
          <EmailSvg />
          <span>Sign in with Email</span>
          <div></div>
        </div>

        <div className="btns email__btn">
          <PasswordSvg />
          <span>Signin with passwod only</span>
          <div></div>
        </div>

        <div className="cancel_btn" aria-label="Close modal">
          <CancelSvg />
        </div>

        <div className="footer">
          <p>
            Don't have an account?
            <button>Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

const AuthModal = () => {
  return (
    <div className="auth_modal">
      <h1 className="title">Join MediumX</h1>

      <div className="content">
        <a className="btns google__btn" href="#">
          <GoogleSvg />

          <span>Sign up with Google</span>
          <div></div>
        </a>
        <div className="btns email__btn">
          <EmailSvg />
          <span>Sign up with Email</span>
          <div></div>
        </div>

        {/* {local authentication} */}
        <section className="local-auth-container">
          <div className="heading">
            <PersonSvg />

            <p>Username & Password</p>
            <PasswordSvg />
          </div>

          <form>
            <div className="local-auth-div">
              <label htmlFor="username">Username:</label>
              <input name="username" type="text" />
            </div>

            <div className="local-auth-div">
              <label htmlFor="password">Password:</label>
              <input name="password" type="text" />
            </div>
          </form>
        </section>

        <div className="cancel_btn" aria-label="Close modal">
          <CancelSvg />
        </div>
        <div className="footer">
          <p>
            Already have an account?
            <button>Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
