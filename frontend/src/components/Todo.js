import React, { useState } from "react";

export default function Todo() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
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
