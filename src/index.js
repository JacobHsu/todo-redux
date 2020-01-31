import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import App from "./components/App";

// applyMiddleware(thunkMiddleware) 引入可以處理異步action的中間件
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// 使用 redux 要根組件注入 store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
