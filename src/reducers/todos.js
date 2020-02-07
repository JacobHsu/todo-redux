import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../actions/actionTypes";
// https://immutable-js.github.io/immutable-js/
import Immutable from "immutable";

const initialState = {
  isFetching: false,
  error: null,
  data: []
}

const reducer = (state = Immutable.fromJS(initialState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set("isFetching", true);
      // return {
      //   ...state,
      //   isFetching: true
      // }
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data)
      });
      // return {
      //   ...state,
      //   isFetching: false,
      //   data: action.data //原本data是數組要再一次轉換不可變對象
      // }
    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      });
      // return {
      //   ...state,
      //   isFetching: false,
      //   error: action.error
      // }  
    default:
      const data = state.get("data");
      return state.set("data", todos(data, action));
      // return {
      //   ...state,
      //   data: todos(state.data, action)
      // }
  }
}
// todos 相當於拆分後的子reducer
const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false
      });
      return state.push(newTodo); //返回新的不可變對象
      // reducer 拆分後 只需處理 todo 的狀態 不用全局完整State的狀態 參看 index_old.js
      // return [...state, 
      //   {
      //     id: action.id,
      //     text: action.text,
      //     completed: false
      //   }
      // ]
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.get("id") === action.id
          ? todo.set("completed", !todo.get("completed"))
          : todo
      );
      // return state.map(
      //   todo =>
      //     todo.id === action.id
      //       ? { ...todo, completed: !todo.completed }
      //       : todo
      // )
    default:
      return state;
    }
}

export default reducer;