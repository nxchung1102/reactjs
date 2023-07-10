import React from "react";
import PropTypes from "prop-types";

TodoHeader.propTypes = {
  currentTodos: PropTypes.number,
  allTodo: PropTypes.number,
};

function TodoHeader({ currentTodos, allTodo }) {
  return (
    <header>
      <h1>Todo App</h1>
      <div className="todo-content">
        <p>
          Completed: {currentTodos}/{allTodo}
        </p>
      </div>
    </header>
  );
}

export default TodoHeader;
