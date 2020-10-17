import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import history from "../history";

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
    logger
  );

  return createStore(reducer, enhancer);
};
