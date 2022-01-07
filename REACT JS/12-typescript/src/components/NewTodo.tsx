import React, { useRef } from "react";
import "./NewTodo.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inpuRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTodo = inpuRef.current!.value;
    props.onAddTodo(enteredTodo);
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
