import { combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import alert from "./alert";
import auth from "./auth";

export default combineReducers({ alert, auth });
