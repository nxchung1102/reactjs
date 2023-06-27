import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "code",
      status: "new",
    },
  ];

  const [todoList, settodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, i) => {
    const newTodoList = [...todoList];

    newTodoList[i] = {
      ...newTodoList[i],
      status: newTodoList[i].status === "new" ? "completed" : "new",
    };

    settodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show new</button>
      </div>
    </div>
  );
}

export default TodoFeature;
