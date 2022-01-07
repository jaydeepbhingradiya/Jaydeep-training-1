import React, { useContext } from "react";
import { TodosContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import "./Todos.css";

const Todos: React.FC = () => {
  const todosctx = useContext(TodosContext);
  return (
    <ul className="todos">
      {todosctx.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item.text}
          onRemoveTodo={todosctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
