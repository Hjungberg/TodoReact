import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "Task 1",
      completed: false,
    },
    {
      id: 1,
      title: "Task 2",
      completed: true,
    },
    {
      id: 2,
      title: "Task 3",
      completed: true,
    },
  ]);

  const addTodo = (todoText) => {
    console.log(todoText)
    setTodo(state => {
      return [...state, { id: uuidv4(), title: todoText }];
    });
  };

  return (
    <>
      <div className="container">
        <div className="todoApp">
          <TodoInput addTodo={addTodo} />
          <TodoList todo={todo} />
        </div>
      </div>
    </>
  );
}

export default App;
