import React from "react";
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import styles from 'shared/formStyles.module.scss';


const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input type="text" placeholder={context.t("Username")} className={styles.textInput} value={props.usernameValue} name="username" onChange={props.handleChangeValue} />
      <input type="password" placeholder={context.t("Password")} className={styles.textInput} value={props.passwordValue} name="password" onChange={props.handleChangeValue} /> 
      <button type="submit" className={styles.button} onClick={props.handleSubmit}>{context.t("Log in")}</button>
    </form>
    <span className={styles.divider}>{context.t("or")}</span>

    <FacebookLogin
    appId="178144872823283"
    fields="name,email,picture"
    cssClass={styles.facebookLogin}
    icon="fa-facebook"
    callback={props.handleFacebookLogin}
    textButton={context.t("Login with Facebook")}
    />
    <span className={styles.forgotLink}>{context.t("Forgot password?")}</span>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleChangeValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
}

export default LoginForm;