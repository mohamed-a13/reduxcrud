import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getPosts } from "./actions/postAction";
import { getUsers } from "./actions/userAction";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//Appeler la fonction
store.dispatch(getPosts());
store.dispatch(getUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
