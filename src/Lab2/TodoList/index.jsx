import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoHeader from "./Components";

TodoList.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
};

function TodoList(props) {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todos");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: Math.random() * 1234, text: inputValue, completed: false },
      ];
    });
    setInputValue("");
  };
  const handleDeleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
  };
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  const filteredTodos = todos
    ? todos.filter((todo) => todo.completed !== false)
    : [];
  return (
    <section id="todoList">
      <TodoHeader currentTodos={filteredTodos.length} allTodo={todos.length} />
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>➕</button>
      </div>
      <ul>
        {todos.length === 0 && <p>Add your first todo</p>}
        {todos.map((todo, i) => (
          <li key={i}>
            <span className={todo.completed ? "completed" : ""}>
              <input
                id="checkbox"
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.text}
            </span>
            <button
              className="danger"
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
