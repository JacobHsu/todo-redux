// reducer -> createStore -> store  
// actions -> dispatch -> store  
// state -> getState -> store  

import { createStore } from 'redux'
import rootReducer from './reducers'
import { addTodo, toggleTodo, setFilter, setTodoText } from './actions'

const store = createStore(rootReducer)

// 初始state
console.log('[store.js]',store.getState())

// 訂閱state的變化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// 發送actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(toggleTodo(0)) // completed: true
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('Learn'))

// 取消訂閱
unsubscribe()