/* App.tsx */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { addTodo } from './actions';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos as string[]);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo} className="add-button">
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo: string, index: number) => (
          <li key={index} className="todo-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
