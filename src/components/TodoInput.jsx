import React, { useState } from "react";

const TodoInput = () => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log("sub");

    if (todoText.trim() === "") return;

    addTodo(todoText);
    setTodoText("");
    console.log("click");
  };

  return (
    <form className="input-field" onSubmit={handleSubmit}>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        className="input-text"
      />
      <button className="input-btn">Todo</button>
    </form>
  );
};

export default TodoInput;
