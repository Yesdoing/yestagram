import React from "react";
import PropTypes from 'prop-types';
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import styles from 'shared/formStyles.module.scss';


const LoginForm = (props, context) => (
  <div className={styles.formComponent}>
    <form className={styles.form}>
      <input type="text" placeholder={context.t("Username")} className={styles.textInput} value={props.usernameValue} name="username" onChange={props.handleChangeValue} />
      <input type="password" placeholder={context.t("Password")} className={styles.textInput} value={props.passwordValue} name="password" onChange={props.handleChangeValue} /> 
      <button type="submit" className={styles.button} onSubmit={props.handleSubmit}>{context.t("Log in")}</button>
    </form>
    <span className={styles.divider}>{context.t("or")}</span>
    <span className={styles.facebookLogin}>
    <LogoFacebook fontSize="20px" color="#385185" />
        {context.t("Log in with Facebook")}
    </span>
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
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;