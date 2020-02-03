# Redux

Reducer action的解析器
所有 actions 都放至一 Reducer 完成顯然不合適 Reducer拆分 便於系統拓展和維護 透過合併API `combineReducers` 來完成

state + action -> reducer() -> new state

reducer -> createStore -> store  
actions -> dispatch -> store  
state -> getState -> store  

[ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)  
reducers, action types, actions 組合到一個文件中，作為獨立模塊
劃分模塊依據，應用狀態State，而不是界面功能 (視圖層和狀態層解耦)
src/ components, containers/feature1, redux  

### react-redux

向根組件注入 Store -> 借助react-redux 提供的Provider組件

連接react組件和redux狀態層 -> 借助 connect 高階組件

獲取react組件所需的 state 和 actions -> map api

展示型組件(負責UI)  props
容器型組件(負責邏輯) redux store(讀) & actions(寫)

containers 容器型組件 設計參照 components 需要與redux連接 進行數據交互的 
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app todo-redux`

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)  
https://github.com/zalmoxisus/redux-devtools-extension

### action

`redux-thunk`: Thunk middleware for Redux
透過redux-thunk這個middleware協助redux處理非同步事件

一個開發者要能夠正確的使用 Redux，就要先掌握 Store、Action、Reducer 這些基本概念，如果想要進一步透過 Redux 處理非同步行為、API 請求、Logging 等等，就要學會使用 Redux Middleware。
[詳解 Redux Middleware](https://medium.com/@max80713/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
