import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import reducer from "./reducer";
import history from "../history";
import thunk from "redux-thunk";

export const initStore = () => {
  const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger);

  return createStore(reducer, enhancer);
};
