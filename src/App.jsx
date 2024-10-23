import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/TodoList";
import {v4 as uuidv4} from 'uuid';

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
    setTodo(state => {
      return[...state, {id: uuidv4(), name: todoText}]
      console.log(todoText)
    })
  }


  return (
    <>
      <div className="container">
        <div className="todoApp">
          <TodoInput />
          <TodoList todo={todo} />
        </div>
      </div>
    </>
  );
}

export default App;
