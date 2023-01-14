import React from "react";

export const TodoForm = () => {
  const [form, setForm] = React.useState({
    id: "",
    task: "",
    isComplete: false,
  });

  const changeTask = (event) => {
    setForm(function (prev) {
      return {
        ...prev,
        task: event.target.value,
      };
    });
  };

  const Submit = (event) => {
    event.preventDefault();

    console.log(form);
  };
  return (
    <form onSubmit={Submit}>
      <input
        placeholder="Add Task Here"
        name="task"
        value={form.task}
        onChange={changeTask}
      />
      <button>ADD TASK</button>
    </form>
  );
};
