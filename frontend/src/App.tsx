import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/todo')
      .then((res) => res.json())
      .then((data) => setTodos(data.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            count is:
            {' '}
            {count}
          </button>
        </p>
        <p>
          Edit
          {' '}
          <code>App.tsx</code>
          {' '}
          and save to test HMR updates.
        </p>
        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo}>
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
