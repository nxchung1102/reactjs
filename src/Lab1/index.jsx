import React, { useState } from "react";
import PropTypes from "prop-types";
import ActiveList from "./Components/ActiveList";

Lab1.propTypes = {};

function Lab1(props) {
  const activeList = [
    {
      id: 1,
      name: "eat",
      status: "none",
    },
    {
      id: 2,
      name: "sleep",
      status: "none",
    },
    {
      id: 3,
      name: "code",
      status: "none",
    },
  ];
  const [count, setCount] = useState(0);
  const [list2, setList2] = useState(activeList);
  const [filteredStatus, setFilteredStatus] = useState("all");
  const handleClick = (active, i) => {
    const newList2 = [...list2];

    newList2[i] = {
      ...newList2[i],
      status: newList2[i].status === "none" ? "selected" : "none",
    };

    const newCount = [...list2];
    newCount[i] = {
      ...(newCount[i].status === "selected"
        ? setCount(count - 1)
        : setCount(count + 1)),
    };

    setList2(newList2);
  };
  const renderList = list2.filter(() => {
    return filteredStatus === "all";
  });

  return (
    <div>
      <h3>so lan click {count}</h3>
      <ActiveList activeList={renderList} onchkClick={handleClick} />
    </div>
  );
}

export default Lab1;
