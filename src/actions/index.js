// type 抽象到常量當中，因為 reducer當中還會需要根據type值做不同邏輯處理
import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from "./actionTypes";

let nextTodoId = 0;

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data
})

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  error
})

/**
 * 獲取待辦事項初始數據
 */
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch("./mock/todos.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodosSuccess(data));
        }) 
      },
      error => {
        dispatch(fetchTodosFailure(error));
        console.log("An error occurred: "+ error)
      }
    )
  }
}

// 以下為同步的處理 通常API是異步的情況

/**
 * 新增待辦事項
 * @param {*} text 
 */
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

/**
 * 更改待辦事項狀態
 * @param {*} id 
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

/**
 * 設置過濾狀態
 * @param {*} filter 
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

/**
 * 設置新增待辦事項的文本訊息
 * @param {*} text 
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})
