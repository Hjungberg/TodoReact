import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      title: "Finish database course",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Add database support",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Profit",
      completed: false
    }
  ]);

  const addTodo = (todoText) => {
    setTodo(state => {
      return [...state, { id: uuidv4(), title: todoText }];
    });
  };

  const removeTodo = (id) => {
    setTodo((state) => {
      return state.filter((todo) => todo.id !== id)
    });
  };



  return (
    <>
      <div className="container">
        <div className="todoApp">
          <TodoInput addTodo={addTodo} />
          <TodoList todo={todo} removeTodo={removeTodo}/>
        </div>
      </div>
    </>
  );
}

export default App;
