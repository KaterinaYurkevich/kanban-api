import { useState, ChangeEvent } from 'react';
import './ModalTask.scss';

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
        <div active={active} setInActive={setActive} className={active ? "modal-task-wrapper active" : "modal-task-wrapper"} onClick={setActive}>
            <div className={active ? "modal-task active" : "modal-task"}
            onClick={e => e.stopPropagation()}>
                <h3 className="modal-task__header">Add New Task</h3>
                <form className="modal-task__form">
                    <label className="modal-task__input-wrapper">Title
                        <input className="modal-task__input" type="text" placeholder="e.g Take coffee break" 
                        //value={titleValue} onChange={(e) => updateTitle(e.target.value)} 
                        />
                    </label>
                    <label className="modal-task__input-wrapper">Description
                        <textarea className="modal-task__input modal-task__textarea" type="text" placeholder="e.g It/'s always good to take a break. This 15 minute break will recharge the batteries a little" 
                        //value={textValue} onChange={(e) => updateText(e.target.value)} 
                        />
                    </label>
                    <div className="modal-task__subtasks">
                        <h4>Subtasks</h4>
                        <input className="modal-task__subtasks-input" type="text" placeholder="e.g Make coffee" 
                        //value={subValue1} onChange={(e) => updateSub(e.target.value)}
                        />
                        <input className="modal-task__subtasks-input" type="text" placeholder="e.g Drink coffee & smile"
                        // value={subValue2} onChange={(e) => updateSub(e.target.value)} 
                        />
                        <button className="modal-task__subtasks__button">+ Add New Subtask</button>
                    </div>
                    <label className="modal-task__select-wrapper">Status
                        <select className="modal-task__select">
                            <option value="Todo">Todo</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <button className="modal-task__button" type='submit'>Create Task</button>
                </form>
            </div>
        </div>
    )
}