import React, { useState } from 'react';

const ToDoItem = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        {/* Checkbox */}
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`checkbox ${todo.completed ? 'checked' : ''}`}
        >
          {todo.completed && '✓'}
        </button>

        {/* Todo Text */}
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="edit-input"
              autoFocus
            />
          ) : (
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="todo-actions">
          {isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="btn btn-save"
              >
                💾 Save
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-cancel"
              >
                ❌ Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                className="btn btn-edit"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="btn btn-delete"
              >
                🗑️ Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
