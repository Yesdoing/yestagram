import React from "react";
import styles from "./styles.module.scss";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";

export const LoginForm = props => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input type="text" placeholder="Username" className={styles.textInput}/>
      <input type="password" placeholder="Password" className={styles.textInput}/> 
      <button type="submit" className={styles.button}>Log in</button>
    </form>
    <span className={styles.divider}>or</span>
    <span className={styles.facebookLogin}>
    <LogoFacebook fontSize="20px" color="#385185" />
        Log in with Facebook
    </span>
    <span className={styles.forgotLink}>Forgot password?</span>
  </div>
);

export const SignupForm = props => (
  <div className={styles.formComponent}>
    <button className={styles.button}>
    <LogoFacebook fontSize="20px" color="#ffffff" />
        Log in with Facebook</button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="email" placeholder="Email" className={styles.textInput}/>
      <input type="text" placeholder="FullName" className={styles.textInput} />
      <input type="username" placeholder="Username" className={styles.textInput} />
      <input type="password" placeholder="Password" className={styles.textInput} />
      <button type="submit" className={styles.button} >Sign up</button>
      <p className={styles.terms}>
        By signing up, you agree to our <span>Terms</span>,{" "}
        <span>Data Policy</span> and <span>Cookies Policy</span>
      </p>
    </form>
  </div>
);
