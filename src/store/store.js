import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  const middleware = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  store = createStore(rootReducer, {}, enhancer);
}

export default store;
