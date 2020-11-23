import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";
import todoReducer from "./ducks/todo";

const reducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const store = createStore(reducer);

export default store;
