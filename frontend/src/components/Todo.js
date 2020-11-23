import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "./../redux/ducks/todo";

export default function Todo() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    dispatch(add_todo(name));
    setName("");
  };

  return (
    <div>
      <h1>Todo:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}
