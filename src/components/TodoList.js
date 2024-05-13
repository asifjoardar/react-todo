import Item from "./Item";

function TodoList({todos}) {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map((item, index) => <Item key={index} item={item} />)
            ) : (
                <p>Seems lonely in here, what are you up to?</p>
            )}
        </ol>
    );
}
export default TodoList;