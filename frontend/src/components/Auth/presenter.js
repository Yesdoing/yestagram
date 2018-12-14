import React from "react";
import styles from './styles.module.scss';
const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img className={styles.phone} src={require('images/Phone.png')} alt="Checkout our app. Is cool "/>
    </div>
    <div className={styles.column}>
      <div className={styles.whiteBox}>
      {(() => {
          switch(props.action) {
            case "login":
                return (
                    <p>
                        Don't have an account?{" "}
                        <span
                            className={styles.changeLink}
                            onClick={props.handleChangeAction}
                        >
                         Sign up   
                        </span>
                    </p>
                );
            case "signup":
                return (
                    <p>
                        Have an account?{" "}
                        <span
                            className={styles.changeLink}
                            onClick={props.handleChangeAction}
                        >
                         Log in
                        </span>
                    </p>
                );
            default:
                return null;
          }
      })()}
      </div>
      <div className={styles.appBox}>
        <span>Get the app.</span>
        <div className={styles.appStores}>
          <img src={require('images/Ios.png')} alt="Download it on the Apple Appstore" />
          <img src={require('images/Android.png')} alt="Download it on the Android Appstore" />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;
