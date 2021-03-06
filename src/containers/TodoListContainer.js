import { connect } from "react-redux";
import { toggleTodo, fetchTodos } from "../actions";
import TodoList from "../components/TodoList";
import {getVisibleTodos} from "../selectors"
import {toJS} from "../HOCs/toJS"

// 過濾 state.todos 真正要展示的數據 移動至 selectors
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case "all":
//       return todos;
//     case "completed":
//       return todos.filter(t => t.completed);
//     case "active":
//       return todos.filter(t => !t.completed);
//     default:
//       return new Error("Unknown filter: " + filter);
//   }
// };

// State 映射到 Props
const mapStateToProps = state => ({
  //todos: getVisibleTodos(state.todos.data, state.filter)
  // toJS() 每次會返回新的對象 即使內容沒有發生改變 導致TodoList會重複渲染 透過HOCs解
  todos: getVisibleTodos(state) //.toJS() //toJS轉換成普通JS對象
});

// Dispatch 映射到 Props
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
});

// connect()(TodoList); 先是調用 connect() 函數 
// 返回值 也是函數 接收的參數是 TodoList
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(TodoList));
