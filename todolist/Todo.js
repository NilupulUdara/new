import React, { useState } from 'react';
import './Todo.css';  // Import the CSS file

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      <input
        className="todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add-button" onClick={addTodo}>Add</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            {todo}
            <button className="remove-button" onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
