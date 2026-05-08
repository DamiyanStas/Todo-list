import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className='liItem'>
      <span className='span'
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          flexGrow: 1,
        }}
      >
        {todo.text}
      </span>
      <button className='btnDelete'
        onClick={() => deleteTodo(todo.id)}>
          X
      </button>
    </li>
  );
}

export default TodoItem;

