import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todo }) => {
  return (
    <div className="list-item">
      <ul>
        {todo.map((todo) => (
          <TodoListItem key={todo.id} todo={todo.title} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
