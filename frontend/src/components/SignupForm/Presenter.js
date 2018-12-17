import React from "react";
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import styles from 'shared/formStyles.module.scss';


const SignupForm = (props, context) => (
    <div className={styles.formComponent}>
      <FacebookLogin
        appId="178144872823283"
        fields="name,email,picture"
        cssClass={styles.facebookLogin}
        icon="fa-facebook"
        callback={props.handleFacebookLogin}
        textButton={context.t("Login with Facebook")}
      />
      <span className={styles.divider}>{context.t("or")}</span>
      <form className={styles.form}>
        <input type="email" placeholder={context.t("Email")} className={styles.textInput} value={props.emailValue} onChange={props.handleChange} name="email"/>
        <input type="text" placeholder={context.t("Name")} className={styles.textInput} value={props.nameValue} onChange={props.handleChange} name="name"/>
        <input type="username" placeholder={context.t("Username")} className={styles.textInput} value={props.usernameValue} onChange={props.handleChange} name="username" />
        <input type="password" placeholder={context.t("Password")} className={styles.textInput} value={props.passwordValue} onChange={props.handleChange} name="password"/>
        <button type="submit" className={styles.button} onClick={props.handleSubmit}>{context.t("Sign up")}</button>
        <p className={styles.terms}>
          {context.t("By signing up, you agree to our ")}<span>{context.t("Terms, Data Policy and Cookies Policy")}</span>
        </p>
      </form>
    </div>
  );
  

  SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
  }

  SignupForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
  }

export default SignupForm;