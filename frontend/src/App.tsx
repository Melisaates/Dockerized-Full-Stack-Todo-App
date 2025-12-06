import api from "./api";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const response = await api.get<Todo[]>("/todos");
    setTodos(response.data);
  }

  const addTodo = async () => {
    await api.post("/todos", { title, completed: false });
    setTitle("");
    loadTodos();
  }

  const toggleTodo = async (id: number, completed: boolean) => {
    await api.put(`/todos/${id}`, { completed: !completed });
    loadTodos();
  }

  const deleteTodo = async (id: number) => {
    await api.delete(`/todos/${id}`);
    loadTodos();
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>To-Do App</h1>
      <input 
        placeholder="Todo ..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginTop: 10 }}>  
            <span 
              onClick={() => toggleTodo(todo.id, todo.completed)}
              style={{ 
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.title}
            </span> 
            <button 
              onClick={() => deleteTodo(todo.id)} 
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;  
