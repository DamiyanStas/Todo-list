import React, { useState } from 'react';
import '../../App.css';
import './TodoForm.css';


function TodoForm({ addTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='input'
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Input field..."
            />
            <button className='btnCreate' type="submit">
                Create
            </button>
        </form>
    );
}

export default TodoForm;
