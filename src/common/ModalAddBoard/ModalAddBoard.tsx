import 'index.scss';
import { useState, ChangeEvent } from 'react';

type Props = {
  isActive: boolean,
  setActive: () => void,
  onCreate: (text: string) => void,
}

export function ModalAddBoard({ isActive, setActive, onCreate }: Props) {
  const [state, setState] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setState(e.target.value)
  }

  function handleCreate() {
    onCreate(state);
    setActive();
  }

  return (
    <>
      <div isActive={isActive} setInActive={setActive} className={isActive ? "modal-board-wrapper active" : "modal-board-wrapper"} onClick={setActive}>
        <div className={isActive ? "modal-board active" : "modal-board"} onClick={e => e.stopPropagation()}>
          <h3>Create new board</h3>
          <label>Title
            <input className='modal-board__input' type='text' placeholder='Enter board name' required onChange={handleChange} />
          </label>
          <button className='modal-board__button' onClick={handleCreate}>
            Create board
          </button>
          </div>
      </div>
    </>
  );
}
