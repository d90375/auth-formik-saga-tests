import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import reducer from "./reducer";
import history from "../history";
import thunk from "redux-thunk";
import init from "./init";

const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger);

const store = createStore(reducer, enhancer);

init(store);

export default store;
