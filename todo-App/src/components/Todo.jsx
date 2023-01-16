import React from "react";

export const Todo = ({ todo }) => {
  const style = {
    display: "flex",
    gap: "5px",
  };
  return (
    <div style={style}>
      <input type="checkbox" />
      <li>{todo.task}</li>
      <button>X</button>
    </div>
  );
};
