import React, { useState } from "react";

function ToDoItem(props) {
  const [checked, updateChecked] = useState(false);
  function checkItem() {
    updateChecked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      style={{ textDecoration: checked ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
