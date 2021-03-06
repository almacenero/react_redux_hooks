import React from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import "./styles.css";
import Todo from "./components/Todo";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const todo = useSelector((state) => state.todos.todo);
  const voters = ["Anthony Sistilli ", "Bob Smith"];

  console.log("mis todos: ", todo);
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} key={voter} />
      ))}
      <Todo />
    </div>
  );
}
