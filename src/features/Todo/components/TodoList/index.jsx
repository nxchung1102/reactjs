import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};
function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, i) => {
    if (!onTodoClick) return;
    onTodoClick(todo, i);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, i) => {
        console.log(todo);
        return (
          <li
            key={todo.id}
            className={classNames({
              "todo-item": true,
              completed: todo.status === "completed",
            })}
            onClick={() => handleTodoClick(todo, i)}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
