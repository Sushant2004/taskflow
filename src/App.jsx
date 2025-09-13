import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Add new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  // Toggle todo completion
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit todo
  const editTodo = (id, newText) => {
    if (newText.trim() !== '') {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      ));
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Get statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;

  return (
    <div className="container">
      <Header />
      
      {/* Add Todo Form */}
      <div className="add-todo-form">
        <div className="form-group">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="todo-input"
          />
          <button
            onClick={addTodo}
            className="add-btn"
          >
            <span>➕</span>
            Add Todo
          </button>
        </div>
      </div>

      {/* Statistics */}
      {totalTodos > 0 && (
        <div className="stats">
          <div className="stats-grid">
            <div className="stat-item stat-total">
              <div className="stat-icon">📊</div>
              <div className="stat-number">{totalTodos}</div>
              <div className="stat-label">Total Tasks</div>
            </div>
            <div className="stat-item stat-completed">
              <div className="stat-icon">✅</div>
              <div className="stat-number">{completedTodos}</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-item stat-remaining">
              <div className="stat-icon">⏳</div>
              <div className="stat-number">{remainingTodos}</div>
              <div className="stat-label">Remaining</div>
            </div>
          </div>
        </div>
      )}

      {/* Todo List */}
      <ToDoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App
