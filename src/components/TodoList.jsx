import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todo, removeTodo }) => {
  return (
    <div className="list-item">
      <ul>
        {todo.length > 0 && todo.map((todo ) => (
          <TodoListItem key={todo.id} todo={todo.title} id={todo.id} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
