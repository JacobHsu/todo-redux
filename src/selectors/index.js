// components代表的UI層 和 redux代表的狀態層 是獨立的兩個層級 應該透過接口通訊 (selector) 而不是數據結構

// AddTodoContainer.js
export const getText = (state) => state.text

// FooterContainer.js
export const getFilter = (state) => state.filter

// TodoListContainer.js
export const getVisibleTodos = (state) => {
  const {todos: {data}, filter} = state
  switch (filter) {
    case "all":
      return data;
    case "completed":
      return data.filter(t => t.completed);
    case "active":
      return data.filter(t => !t.completed);
    default:
      return new Error("Unknown filter: " + filter);
  }
};