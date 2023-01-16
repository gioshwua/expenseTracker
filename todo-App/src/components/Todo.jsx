import React from "react";

export const Todo = (props) => {
  const style = {
    display: "flex",
    gap: "5px",
  };
  return (
    <div style={style}>
      <input type="checkbox" />
      <li>{props.todo.task}</li>
      <button>X</button>
    </div>
  );
};
