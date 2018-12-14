import React from "react";
import styles from "./styles.module.scss";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";

export const LoginForm = props => (
  <div>
    <form>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/> 
      <button type="submit">Log in</button>
    </form>
    <span>OR</span>
    <span>
    <LogoFacebook fontSize="20px" color="#385185" />
        Log in with Facebook
    </span>
    <span>Forgot password?</span>
  </div>
);

export const SignupForm = props => (
  <div className={styles.signupForm}>
    <button>
    <LogoFacebook fontSize="20px" color="#ffffff" />
        Log in with Facebook</button>
    <span>OR</span>
    <form>
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="FullName" />
      <input type="username" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign up</button>
      <p>
        By signing up, you agree to our <span>Terms</span>,{" "}
        <span>Data Policy</span> and <span>Cookies Policy</span>
      </p>
    </form>
  </div>
);
