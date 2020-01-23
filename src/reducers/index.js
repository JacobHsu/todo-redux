import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER} from '../actions/actionTypes'

const initialState = {
  filter: 'all',
  text: '',
  todos: [],
}

const todoApp = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      // redux 的 state 是不可變的 不能在原有 state 直接修改 而是返回新的 對象
      // 數組拓展新增
      return {
        ...state,
        todos: [
          ...state.todos, 
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
            todo.id === action.id ? {...todo, completed: !todo.completed} : todo
          )
      }
    case SET_TODO_TEXT:
      return {
        ...state,
        text: action.text
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default: 
      return state  
  }
}

export default todoApp