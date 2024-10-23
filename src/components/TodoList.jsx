import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todo }) => {
  return (
    <div className="list-item">
      <li>
        {todo.map((todo) => (
          <TodoListItem key={todo.id} todo={todo.title} />
        ))}
      </li>
    </div>
  );
};

export default TodoList;
