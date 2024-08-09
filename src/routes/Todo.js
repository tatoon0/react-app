import React, { useState } from 'react';

function Todo() {
    const [Todo, setTodo] = useState("");
    const [Todos, setTodos] = useState([]);
    const onChange = (e) => setTodo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (Todo === "") {
            return;
        }
        setTodos((current) => [...current, Todo]);
        setTodo("");
    }
    return (
        <div>
            <h1>Todo List : {Todos.length}</h1>
            <form onSubmit={onSubmit}>
                <input 
                    value={Todo}
                    onChange={onChange}
                    type="text" 
                    placeholder="Write your to do...">
                </input>
                <button>Add</button>
            </form>
            <hr />
            <ul>
                {Todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;