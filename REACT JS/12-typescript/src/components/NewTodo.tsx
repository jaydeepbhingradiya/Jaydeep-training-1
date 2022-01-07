import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todo-context";
import "./NewTodo.css";
const NewTodo: React.FC = () => {
  const todosctx = useContext(TodosContext);
  const inpuRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTodo = inpuRef.current!.value;
    todosctx.addTodo(enteredTodo);
    inpuRef.current!.value = "";
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text : </label>
      <input type="text" id="text" ref={inpuRef} />
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
