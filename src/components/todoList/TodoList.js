import React from 'react';
// import TodoItem from './TodoItem';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='list'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
