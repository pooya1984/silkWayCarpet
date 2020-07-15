import { combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import alert from "./alert";
import auth from "./auth";
import product from "./product";

export default combineReducers({ alert, auth, product });
