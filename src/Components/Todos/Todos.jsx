import React from "react";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export const Todos = () => {
  const [todos, setTodos] = React.useState({
    loading: true,
    error: false,
    todos: [],
  });

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) =>
        setTodos({
          ...todos,
          todos: data,
          loading: false,
        })
      )
      .catch((err) =>
        setTodos({
          ...todos,
          error: err,
          loading: false,
        })
      );
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-5">Todos</h1>
      {todos.loading && <Loading />}
      {todos.error && <Error />}
      {todos.todos.length > 0 && (
        <ul>
          {todos.todos.map((todo) => (
            <li key={todo.id} className="d-flex justify-content-between border rounded mb-3 p-3 align-items-center">
              <div className="d-flex">
              <input type="checkbox" className="me-3" />
              <h3>{todo.title}</h3>
              </div>
             <div>
             <button className="btn btn-primary me-2">Edit</button>
              <button className="btn btn-danger">Delete</button>
             </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
