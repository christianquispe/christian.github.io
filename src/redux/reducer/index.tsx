// import { authReducer } from "@redux/reducers/auth-reducer/auth-reducer";
import { combineReducers } from "redux";
import { projectsReducer } from "./projectsReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
});

export default rootReducer;
