import React from "react";
import { Todo } from "./Todo";

export const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
