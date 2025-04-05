import React from "react";

const Todo = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
};

export default Todo;
