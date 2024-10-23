import React, { useState } from "react";

const TodoListItem = ({ todo }) => {

const [isDone, setisDone] = useState(false)

const toggleDone = () => {
  setisDone(isDone => !isDone)
  console.log('clicked')
}

  return (
    <ul className="list">
      <p onClick={toggleDone} className={`${isDone ? 'task-done' : ''}`}>
        {todo}
      </p>
      <button className="delete-btn">X</button>
    </ul>
  );
};

export default TodoListItem;
