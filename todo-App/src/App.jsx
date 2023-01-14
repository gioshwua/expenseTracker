import React from "react";
import { TodoForm } from "./components/TodoForm";
function App() {
  const [todo, setTodo] = React.useState([]);
  return (
    <div>
      <TodoForm />
    </div>
  );
}

export default App;
