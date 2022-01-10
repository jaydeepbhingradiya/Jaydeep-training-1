import React from "react";
import "./TodoItem.css";

const TodoItem: React.FC<{ item: string; onRemoveTodo: () => void }> = (
  props
) => {
  const { item } = props;
  return (
    <li onClick={props.onRemoveTodo} className="item">
      {item}
    </li>
  );
};

export default TodoItem;
