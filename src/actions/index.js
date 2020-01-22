// type 抽象到常量當中，因為 reducer當中還會需要根據type值做不同邏輯處理
import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER } from "./actionTypes";

let nextTodoId = 0,

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})
