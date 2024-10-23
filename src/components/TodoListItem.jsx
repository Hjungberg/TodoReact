import React, { useState } from "react";

const TodoListItem = ({ todo, toggleDone, removeTodo }) => {
  const [isDone, setisDone] = useState(false);

  // const toggleDone = () => {
  //   setisDone((isDone) => !isDone);
    
  // };


  return (
    <li className="list">
      <p
        onClick={() => toggleDone(todo.id)}
        className={`TodoListItem ${todo.completed ? "task-done" : ""}`}
      >
        {todo.title}
      </p>
      <button onClick={() => removeTodo(todo.id)} 
      className="delete-btn">
        X
      </button>
    </li>
  );
};

export default TodoListItem;
