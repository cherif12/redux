import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../JS/actions/Actions";

export const Addtask = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const handleAddTask = () => {
    dispatch(addtodo(description));
    setDescription("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <form>
        <input
          className="add_input"
          type="text"
          placeholder="Enter a Todo..."
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="add" onClick={handleAddTask}>
          AddTodo
        </button>
      </form>
    </>
  );
};
