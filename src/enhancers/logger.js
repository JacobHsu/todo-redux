/**
 * 打印actions、state
 */
const logger = createStore => (...args) => {
  const store = createStore(...args);
  const dispatch = (action) => {
    console.group(action.type);
    console.log('dispatching:', action);
    const result = store.dispatch(action);
    console.log('next state:', store.getState());
    console.groupEnd();
    return result; //得到新的dispatch方法
  }
  //返回store時 將原有的store的dispatch方法進行覆蓋
  return {...store, dispatch}
}

export default logger;