import React, { useState } from "react";
import TodoList from "./TodoList";
import './App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = [...todo, task];
    setTodo(newTodo);
    setTask("");
  
  };
  const deleteHandler = (indexValue) =>{
    const newTodo = todo.filter((todo,index) => index !== indexValue);
    setTodo(newTodo);
  }
  return (
    <div className="App">
      <h1>Todo Mangement</h1>
      <form onSubmit={submitHandler} className="header">
        <input
        className="text"
          type="text"
          name="task"
          value={task}
          onChange={changeHandler}
        />
        <input type="submit" name="Add" value="Add" />
      </form>
      <TodoList className="list" todolist={todo} deleteHandler={deleteHandler} />
    </div>
  );
};

export default App;
