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
      URL: "https://i.pinimg.com/236x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg",
    },
    {
      id: 2,
      name: "sleep",
      status: "none",
      URL: "https://i.pinimg.com/236x/08/9c/af/089cafb7ed2ce7817d465ed4d0b970fd.jpg",
    },
    {
      id: 3,
      name: "code",
      status: "none",
      URL: "https://i.pinimg.com/236x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg",
    },
  ];
  const [count, setCount] = useState(0);
  const [list2, setList2] = useState(activeList);
  const [filteredStatus, setFilteredStatus] = useState("all");
  const [lastSelected, setLastSelected] = useState(null);
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

  const handleChange = (e) => {
    const checkedName = e.target.name;
    if (e.target.checked) {
      setLastSelected(checkedName);
    } else {
      setLastSelected(null);
    }
  };
  return (
    <div>
      <h3>so lan click {count}</h3>
      <h3>phan tu cuoi cung {lastSelected}</h3>
      <ActiveList
        activeList={renderList}
        onchkClick={handleClick}
        onChkChange={handleChange}
      />
    </div>
  );
}

export default Lab1;
