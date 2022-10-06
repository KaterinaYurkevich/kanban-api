import { useState, ChangeEvent } from 'react';
import { addNewTask } from '../../service/tasks';
import 'index.scss';

type Props = {
    isActive: boolean,
    setActive: () => void,
    boardTitle: string
}

export function ModalAddTask({isActive, setActive, boardTitle} : Props) {
    const [stateTitle, setStateTitle] = useState('');
    const [stateDescr, setStateDescr] = useState('');
    const [stateStatus, setStateStatus] = useState('');

    function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
        setStateTitle(e.target.value)
    }

    function handleChangeDescr(e: ChangeEvent<HTMLTextAreaElement>) {
        setStateDescr(e.target.value)
    }

    function handleChangeStatus(e: ChangeEvent<HTMLSelectElement>) {
        setStateStatus(e.target.value)
    }    
    
    function handleCreate() {
        addNewTask({ title: stateTitle, description: stateDescr, status: stateStatus, boardsTitle: boardTitle })        
        setActive();
    }

    return(
        <div isActive={isActive} setInActive={setActive} className={isActive ? "modal-task-wrapper active" : "modal-task-wrapper"} onClick={setActive}>
            <div className={isActive ? "modal-task active" : "modal-task"}
            onClick={e => e.stopPropagation()}>
                <h3 className="modal-task__header">Add New Task</h3>
                <form className="modal-task__form">
                    <label className="modal-task__input-wrapper">Title
                        <input className="modal-task__input" type="text" placeholder="e.g Take coffee break" required
                        onChange={handleChangeTitle} 
                        />
                    </label>
                    <label className="modal-task__input-wrapper">Description
                        <textarea className="modal-task__input modal-task__textarea" placeholder="e.g It/'s always good to take a break. This 15 minute break will recharge the batteries a little" 
                        onChange={handleChangeDescr} 
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
                        <select className="modal-task__select" onChange={handleChangeStatus}>
                            <option value="Todo">Todo</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                    <button className="modal-task__button" type="submit" onClick={handleCreate}>Create Task</button>
                </form>
            </div>
        </div>
    )
}