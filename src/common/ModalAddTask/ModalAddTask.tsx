import { useState, ChangeEvent } from 'react';
import './modal.scss';

type Props = {
    active: boolean,
    setActive: () => void
}

export function ModalAddTask({active, setActive} : Props) {
    const [state, setState] = useState('');

    //function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //    setState(e.target.value)
    //  }
    
    //  function handleCreate() {
    //    onCreate(state);
    //    setActive();
    //  }

    return(
        <div active={active} setInActive={setActive} className={active ? "modal-wrapper active" : "modal-wrapper"} onClick={setActive}>
            <div className={active ? "modal active" : "modal"}
            onClick={e => e.stopPropagation()}>
                <h2 className="modal__header">Add New Task</h2>
                <form >
                    <label>Title
                        <input className="modal__input" type="text" placeholder="e.g Take coffee break" 
                        //value={titleValue} onChange={(e) => updateTitle(e.target.value)} 
                        />
                    </label>
                    <label>Description
                        <textarea className="modal__input" type="text" cols="30" rows="10" placeholder="e.g It/'s always good to take a break. This 15 minute break will recharge the batteries a little" 
                        //value={textValue} onChange={(e) => updateText(e.target.value)} 
                        />
                    </label>
                    <div className="modal__subtasks">
                        <h3>Subtasks</h3>
                        <input type="text" placeholder="e.g Make coffee" 
                        //value={subValue1} onChange={(e) => updateSub(e.target.value)}
                        />
                        <input type="text" placeholder="e.g Drink coffee & smile"
                        // value={subValue2} onChange={(e) => updateSub(e.target.value)} 
                        />
                        <button className="modal__subtasks__button">+ Add New Subtask</button>
                    </div>
                    <label>Status
                        <select>
                            <option value="Todo">Todo</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <button className="modal__button" type='submit'>Create Task</button>
                </form>
            </div>
        </div>
    )
}