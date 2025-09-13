import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onToggleComplete, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🎯</div>
        <h3 className="empty-title">Ready to get things done?</h3>
        <p className="empty-text">Add your first task above and start your productivity journey!</p>
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
