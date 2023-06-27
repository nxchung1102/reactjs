import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classNames from "classnames";
ActiveList.propTypes = {
  activeList: PropTypes.array,
  onchkClick: PropTypes.func,
};
ActiveList.defaultProps = {
  activeList: [],
  onchkClick: null,
};
function ActiveList({ activeList, onchkClick }) {
  const handleClick = (active, i) => {
    if (!onchkClick) return;
    onchkClick(active, i);
  };
  return (
    <div className="active-list">
      {activeList.map((active, i) => {
        return (
          <div>
            <input
              type="checkbox"
              id={active.id}
              name={active.status}
              className={classNames({
                "active-item": true,
                selected: active.status === "selected",
              })}
              onClick={() => {
                handleClick(active, i);
              }}
            />
            <label for={active.name}>{active.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default ActiveList;
