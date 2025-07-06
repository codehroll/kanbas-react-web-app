import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  // const [todos, setTodos] = useState([
  //   { id: "1", title: "Learn React" },
  //   { id: "2", title: "Learn Node" },
  // ]);
  // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  // const addTodo = (todo: any) => {
  //   const newTodos = [
  //     ...todos,
  //     { ...todo, id: new Date().getTime().toString() },
  //   ];
  //   setTodos(newTodos);
  //   setTodo({ id: "-1", title: "" });
  // };
  // const deleteTodo = (id: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };
  // const updateTodo = (todo: any) => {
  //   const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
  //   setTodos(newTodos);
  //   setTodo({ id: "-1", title: "" });
  // };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm
        // todo={todo}
        // setTodo={setTodo}
        // addTodo={addTodo}
        // updateTodo={updateTodo}
        />
        {/* {todos.map((todo) => (
          <TodoItem todo={todo} deleteTodo={deleteTodo} setTodo={setTodo} />
        ))} */}
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}

        {/* <li className="list-group-item text-nowrap d-flex">
          <button
            onClick={() => addTodo(todo)}
            id="wd-add-todo-click"
            className="btn btn-success ms-2"
          >
            Add
          </button>
          <button
            onClick={() => updateTodo(todo)}
            id="wd-update-todo-click"
            className="btn btn-warning ms-2"
          >
            Update
          </button>
          <input
            defaultValue={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            className="form-control  me-10"
            style={{ order: -1 }}
          />
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => deleteTodo(todo.id)}
              id="wd-delete-todo-click"
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            <button
              onClick={() => setTodo(todo)}
              id="wd-set-todo-click"
              className="btn btn-primary me-2 float-end"
            >
              Edit
            </button>
            {todo.title}
          </li>
        ))} */}
      </ul>
      <hr />
    </div>
  );
}
