import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "redux/configureStore";
import I18n from "redux-i18n";
import { ConnectedRouter } from "connected-react-router";
import { translations } from "translations";

import App from "components/App";

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} initialLang="en" fallbackLang="en">
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </I18n>
  </Provider>,
  document.getElementById("root")
);
