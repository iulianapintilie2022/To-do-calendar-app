import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';
import "./../../../App.css";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem("localTasks");
        if(savedTodos !== ''){
            setTodos(JSON.parse(savedTodos));
        }
    }, []);
   
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        localStorage.setItem("localTasks", JSON.stringify(newTodos));
        setTodos(newTodos);
    };
   
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        const updatedTodos = todos.map(item => (item.id === todoId ? newValue : item));

        localStorage.setItem("localTasks", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };

    const removeTodo = id => {
        const cleanTodos = todos.filter(todo => todo.id !== id);

        localStorage.setItem("localTasks", JSON.stringify(cleanTodos));
        setTodos(cleanTodos);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        localStorage.setItem("localTasks", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };

    return (
        <>
            <h2>Daily</h2>
            <h1>To Do List</h1>
            <div >
            <TodoForm onSubmit={addTodo} />
            <Todo className="todo-list"
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            </div>
        </>
    );
}

export default TodoList;