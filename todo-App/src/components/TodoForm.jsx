import React from "react";

export const TodoForm = (props) => {
  const [todo, setTodo] = React.useState({
    id: "",
    task: "",
    isComplete: false,
  });

  const changeTask = (event) => {
    setTodo(function (prev) {
      return {
        ...prev,
        task: event.target.value,
      };
    });
  };

  const Submit = (event) => {
    event.preventDefault();

    if (todo.task.trim()) {
      //remove white spaces from the string
      props.addTodo({
        ...todo,
        id: Math.floor(Math.random() * 10000),
      });
      //reset task input
      setTodo({
        ...todo,
        task: "",
      });
    }
  };
  return (
    <form onSubmit={Submit}>
      <input
        placeholder="Add Task Here"
        name="task"
        value={todo.task}
        onChange={changeTask}
      />
      <button>ADD TASK</button>
    </form>
  );
};
