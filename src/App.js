import './App.css';
import Header from "./components/header/Header";
import Form from "./components/Form";
import TodoHero from "./components/header/TodoHero";
import TodoList from "./components/TodoList";
import "./css/styles.css"
import {useEffect, useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);
    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true
    ).length;
    const total_todos = todos.length;
    return (
        <div className="App">
            <Header />
            <TodoHero todos_completed={todos_completed} total_todos={total_todos} />
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
