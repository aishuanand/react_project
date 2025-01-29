import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-teal-600 my-4">To-Do List App</h1>
      
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded w-72"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-teal-500 text-white rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <ul className="w-72">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.task}</span>
            <button
              className="text-red-500"
              onClick={() => deleteTodo(todo.id)}
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
