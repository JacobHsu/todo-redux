// reducers 拆分(根據state) 便於拓展和維護 和 合併API(combineReducers)
//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import todos from './todos'
import filter from './filter'
import text from './text'

export default combineReducers({
  todos,
  text,
  filter
});
