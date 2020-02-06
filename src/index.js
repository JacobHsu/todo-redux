import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import App from "./components/App";
// Middleware其實是 Store Enhander的一個特例 日常盡可能使用Middleware 約束少改底層邏輯
// applyMiddleware 的返回值就是 Store Enhander
import loggerMiddleware from "./middlewares/logger"
import loggerEnhancer from "./enhancers/logger"

// applyMiddleware(thunkMiddleware) 引入可以處理異步action的中間件
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


// composeEnhancers redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));
const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware),loggerEnhancer));

// 使用 redux 要根組件注入 store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
