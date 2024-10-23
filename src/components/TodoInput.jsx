import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <form className="input-field" onSubmit={handleSubmit}>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        autoFocus
        className="input-text"
      />
      <button className="input-btn">Todo</button>
    </form>
  );
};

export default TodoInput;
