import React from "react";
import PropTypes from 'prop-types';
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import styles from 'shared/formStyles.module.scss';


const SignupForm = (props, context) => (
    <div className={styles.formComponent}>
      <button className={styles.button}>
      <LogoFacebook fontSize="20px" color="#ffffff" />
          {context.t("Log in with Facebook")}</button>
      <span className={styles.divider}>{context.t("or")}</span>
      <form className={styles.form}>
        <input type="email" placeholder={context.t("Email")} className={styles.textInput}/>
        <input type="text" placeholder={context.t("FullName")} className={styles.textInput} />
        <input type="username" placeholder={context.t("Username")} className={styles.textInput} />
        <input type="password" placeholder={context.t("Password")} className={styles.textInput} />
        <button type="submit" className={styles.button}>{context.t("Sign up")}</button>
        <p className={styles.terms}>
          {context.t("By signing up, you agree to our ")}<span>{context.t("Terms, Data Policy and Cookies Policy")}</span>
        </p>
      </form>
    </div>
  );
  
  SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
  }

export default SignupForm;