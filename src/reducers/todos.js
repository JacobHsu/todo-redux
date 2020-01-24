import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // reducer 拆分後 只需處理 todo 的狀態 不用全局完整State的狀態 參看 index_old.js
      return [...state, 
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
      )
    default:
      return state;
    }
}

export default todos;