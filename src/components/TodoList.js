import Item from "./Item";
import "../css/styles.css"
import {useState} from "react";

const LOAD_ITEM = 2;

function TodoList({todos, setTodos}) {
    const [displayedData, setDisplayedData] = useState(todos);
    const [visibleItemCount, setVisibleItemCount] = useState(LOAD_ITEM);

    function handleLoadMore() {
        setVisibleItemCount(prevState => prevState + LOAD_ITEM);
    }

    return (
        <>
            <ol className="todo_list">
                {todos && todos.length > 0 ? (
                    todos.slice(0, Math.min(visibleItemCount, todos.length)).map((item, index) => (
                        <Item key={index} item={item} todos={todos} setTodos={setTodos}/>
                    ))
                ) : (
                    <p>Seems lonely in here, what are you up to?</p>
                )}
            </ol>
            {todos.length > visibleItemCount && <button className="loadMoreButton" onClick={handleLoadMore}>Load More</button>}
        </>
    );
}

export default TodoList;