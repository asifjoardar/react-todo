function TodoHero({ todos_completed, total_todos }) {
    return (
        <section className="todohero_section">
            <div className="hero_text">
                <p className="text_large">Task Done</p>
            </div>
            <div className="hero_circle">
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}

export default TodoHero;