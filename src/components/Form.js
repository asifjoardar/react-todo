import "../css/styles.css";
import {useState} from "react";

function Form({todos, setTodos}) {
    const [errors, setErrors] = useState({});

    function validateForm(value) {
        const errors = {};
        if (!value) {
            errors.value = "This field is required";
        }
        return errors;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const value = event.target.todo.value;
        const newErrors = validateForm(value);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const newTodo = {
                title: value,
                id: self.crypto.randomUUID(),
                is_completed: false,
            };

            setTodos((prevTodos) => [...prevTodos, newTodo]);

            const updatedTodoList = JSON.stringify([...todos, newTodo]);
            localStorage.setItem("todos", updatedTodoList);

            event.target.reset();
        }
    };

    return (
        <>

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="todo">
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Write your next task"
                    />
                </label>

                <button>
                    <span className="visually-hidden">Submit</span>
                    <svg
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                    >
                        <path
                            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                            fillRule="nonzero"
                        />
                    </svg>
                </button>
            </form>
            {errors.value &&
                <div className="error-message">
                    {errors.value}
                </div>
            }
        </>
    );
}

export default Form;