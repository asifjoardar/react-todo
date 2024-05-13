import './App.css';
import Header from "./components/header/Header";
import Form from "./components/Form";
import TodoHero from "./components/header/TodoHero";
import TodoList from "./components/TodoList";
import "./css/styles.css"

function App() {
  return (
    <div className="App">
        <Header />
        <TodoHero todos_completed={0} total_todos={0} />
        <Form />
        <TodoList todos={[]} />
    </div>
  );
}

export default App;
