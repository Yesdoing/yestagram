import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "redux/modules/user";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { i18nState } from 'redux-i18n';

const env = process.env.NODE_ENV;

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = history =>
  combineReducers({
    user,
    router: connectRouter(history),
    i18nState,
  });

let store;

if (env === "development") {
  store = initialState =>
    createStore(
      reducer(history),
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = initialState =>
    createStore(reducer(history), applyMiddleware(...middlewares));
}

export default store();
