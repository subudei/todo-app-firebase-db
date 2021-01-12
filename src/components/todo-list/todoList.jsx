import React from "react";
import "./todoList.styles.css";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import { FaTrashAlt } from "react-icons/fa";
import { MdDone, MdDoneAll } from "react-icons/md";

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
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="todo__list__task">
      <div>
        <p className="todo__paragraph">{todo}</p>

        {inprogress ? (
          <p className="inprogress">In Progress</p>
        ) : (
          <p className="inprogress done">Complited</p>
        )}
      </div>
      <div className="todo__icons">
        <div className="todo__icon" onClick={toggleInprogress}>
          {inprogress ? <MdDone /> : <MdDoneAll />}
        </div>
        <div className="todo__icon">
          <FaTrashAlt onClick={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
