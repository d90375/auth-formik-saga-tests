import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";
import authReducer, { moduleName as authModule } from "../redux/ducks/auth";
import companiesReducer, {
  moduleName as companiesModule,
} from "../redux/ducks/companies";

export default combineReducers({
  router: connectRouter(history),
  [authModule]: authReducer,
  [companiesModule]: companiesReducer,
});
