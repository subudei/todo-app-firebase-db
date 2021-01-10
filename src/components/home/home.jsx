import React, { useState, useEffect } from "react";
import "./home.styles.css";
import { useAuth } from "../../contexts/authContext";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";
import TodoList from "../todo-list/todoList";

function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const currentUserId = currentUser ? currentUser.uid : null;
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTodos();
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out!");
    }
  }
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };
  const getTodos = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("todos")
      .onSnapshot(function (querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
          }))
        );
      });
  };
  const addTodo = (e) => {
    e.preventDefault();

    db.collection("users").doc(currentUser.uid).collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  };

  return (
    <div className="home__container">
      <div className="current__user__info">
        <h2>Profile</h2>
        {error && <h2>{error}</h2>}
        <h3>Email:</h3> {currentUser.email}
        <Link to="/update-profile">Update Profile</Link>
        <button onClick={handleLogout}>LOG OUT</button>
      </div>
      <div>
        <h1> TODO App </h1>
        <form className="todo__form" onSubmit={addTodo}>
          <input
            className="todo__input"
            type="text"
            placeholder="add new todo"
            onChange={handleChange}
            value={todoInput}
          />
          <button className="todo__btn">add todo</button>
        </form>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo.todo}
            inprogress={todo.inprogress}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
