import React, { useState } from "react";

const TodoListItem = ({ todo }) => {
  const [isDone, setisDone] = useState(false);

  const toggleDone = () => {
    setisDone((isDone) => !isDone);
  };

  return (
    <li className="list">
      <p onClick={toggleDone} className={`TodoListItem ${isDone ? "task-done" : ""}`}>
        {todo}
      </p>
      <button className="delete-btn">X</button>
    </li>
  );
};

export default TodoListItem;
