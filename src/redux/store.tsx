import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../redux/reducer";

function assembleStore(): Store {
  let composed;
  if (process.env.NODE_ENV !== "production") {
    composed = composeWithDevTools(applyMiddleware());
  }

  return createStore(rootReducer, composed);
}

export default assembleStore;
