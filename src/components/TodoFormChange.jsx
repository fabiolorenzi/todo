import React, {useState} from "react";

function TodoFormChange(props) {
    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });

        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                placeholder="Change here"
                name="text"
                className="todo-input"
                onChange={handleChange}
            />
            <button className="todo-button">Modify</button>
        </form>
    );
};

export default TodoFormChange;