import React, { useState } from "react";

const TodoList = ({ todoListArray }) => {
  const [todoListArrays, setTodoListArray] = useState();
  const deleteTodo = (id) => {
    setTodoListArray(todoListArray);
    const updatedTodos = todoListArrays.filter((todo) => todo.id !== id);
    setTodoListArray(updatedTodos);
  };
  return (
    <div>
      <ol>
        {todoListArray.map((todo, id) => {
          return (
            <li key={id}>
              {todo.task}{" "}
              <button
                onClick={() => {
                  deleteTodo(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoList;
