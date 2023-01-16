import React from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);
  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
