import React, { useState, useEffect } from "react";
import "./home.styles.css";
import { useAuth } from "../../contexts/authContext";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "firebase";
import TodoList from "../todo-list/todoList";
import { FaPowerOff } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  // const currentUserId = currentUser ? currentUser.uid : null;
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTodos();
    getUserInfo();
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
  const getUserInfo = () => {
    db.collection("users")
      .doc(currentUser.uid)
      .collection("usersInfo")
      .onSnapshot(function (querySnapshot) {
        setUserData(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            userName: doc.data().userName,
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
      <div className="circle__one__home" />
      <div className="circle__two__home" />
      <div className="todo__app">
        {error && <h2>{error}</h2>}

        <div className="todo__title">
          {" "}
          {userData.map((user) => (
            <h3 key={user.id}>{user.userName}'s todo list </h3>
          ))}
          <div className="todo__title__icons">
            <Link to="/update-profile">
              <MdSettings className="todo__title__icon" />
            </Link>

            <FaPowerOff onClick={handleLogout} className="todo__title__icon" />
          </div>
        </div>
        <form className="todo__form" onSubmit={addTodo}>
          <input
            className="todo__input"
            type="text"
            placeholder="add new todo"
            onChange={handleChange}
            value={todoInput}
          />
        </form>
        <div className="todos__list">
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
    </div>
  );
}

export default Home;
