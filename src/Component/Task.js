import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checktodo, deletetodo, edittodo } from "../JS/actions/Actions";

export const Task = ({ id, description, isDone }) => {
  const [showinput, setShowInput] = useState(false);
  const handleDelete = () => dispatch(deletetodo(id));

  const handleChecker = () => dispatch(checktodo(id, isDone));

  const [title, setTitle] = useState(description);
  const handleChange = (e) => setTitle(e.target.value);

  const [readinput, setreadinput] = useState(true);
  const dispatch = useDispatch();

  const handleEdit = (event) => {
    dispatch(edittodo(id, title));
    setShowInput(!showinput);
  };

  return (
    <div>
      <li
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.07 }}
      >
        <input
          type="text"
          value={title}
          onChange={handleChange}
          readOnly={readinput}
        />
        {showinput ? (
          <input type="text" value={title} onChange={handleChange} />
        ) : (
          ""
        )}
        <button onClick={handleChecker}>Check</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};
