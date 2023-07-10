import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classNames from "classnames";
ActiveList.propTypes = {
  activeList: PropTypes.array,
  onchkClick: PropTypes.func,
  onChkChange: PropTypes.func,
};
ActiveList.defaultProps = {
  activeList: [],
  onchkClick: null,
  onChkChange: null,
};
function ActiveList({ activeList, onchkClick, onChkChange }) {
  const handleClick = (active, i) => {
    if (!onchkClick) return;
    onchkClick(active, i);
  };
  const handleChange = (e) => {
    if (!onChkChange) return;
    onChkChange(e);
  };
  return (
    <div className="active-list">
      {activeList.map((active, i) => {
        return (
          <div className="list-checkbox">
            <div>
              <input
                type="checkbox"
                id={active.id}
                name={active.name}
                className={classNames({
                  "active-item": true,
                  selected: active.status === "selected",
                })}
                onClick={() => {
                  handleClick(active, i);
                }}
                onChange={(e) => {
                  console.log(e);
                  handleChange(e);
                }}
              />
              <label for={active.name}>{active.name}</label>
            </div>

            <div className="test-image">
              <img src={active.URL} alt={active.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActiveList;
