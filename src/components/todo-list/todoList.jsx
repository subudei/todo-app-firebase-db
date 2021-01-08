import React from "react";
import "./todoList.styles.css";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

function TodoList({ todo, id, inprogress }) {
  const { currentUser } = useAuth();

  const toggleInprogress = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("todos")
      .doc(id)
      .update({
        inprogress: !inprogress,
      });
  };

  const deleteTodo = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("todos")
      .doc(id)
      .delete();
  };

  return (
    <div className="todo__list__task">
      <p>{todo}</p>

      {inprogress ? (
        <p className="inprogress">In Progress</p>
      ) : (
        <p className="inprogress done">Complited</p>
      )}
      <button onClick={toggleInprogress}>
        {inprogress ? "Done" : "Undone"}
      </button>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}

export default TodoList;
