import { ChangeEvent, FormEvent, useState, useContext } from "react";

export function NewBoard() {
    const [title, setTitle] = useState('');

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
    }

    return (
        <div className="newBoard-wrapper">
            <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input type="text" placeholder="Write title of new board" value={title} onChange={(e) => handleChange(e)} required />
                <button type="submit">Add New Board</button>
            </form>
        </div>
    )
}