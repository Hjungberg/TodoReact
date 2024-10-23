import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todo, toggleDone, removeTodo }) => {
  return (
    <div className="list-item">
      <ul>
        {todo.length > 0 &&
          todo.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              toggleDone={toggleDone}
              removeTodo={removeTodo}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
