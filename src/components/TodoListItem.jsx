import React, { useState } from "react";

const TodoListItem = ({ todo, removeTodo }) => {
  const [isDone, setisDone] = useState(false);

  const toggleDone = () => {
    setisDone((isDone) => !isDone);
  };

  console.log(todo)
  return (
    <li className="list">
      <p
        onClick={toggleDone}
        className={`TodoListItem ${isDone ? "task-done" : ""}`}
      >
        {todo.id},{todo}
      </p>
      <button onClick={() => removeTodo(todo.id)} 
      className="delete-btn">
        X
      </button>
    </li>
  );
};

export default TodoListItem;
