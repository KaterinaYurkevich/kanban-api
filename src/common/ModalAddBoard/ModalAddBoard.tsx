import './ModalAddBoard.scss';
import { useState, ChangeEvent } from 'react';

type Props = {
  active: boolean
  setActive: () => void
  onCreate: (text: string) => void
}

export function ModalAddBoard({ active, setActive, onCreate }: Props) {
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
      <div active={active} setInActive={setActive}className={active ? "modal-board-wrapper active" : "modal-board-wrapper"} onClick={setActive}>
        <div className={active ? "modal-board active" : "modal-board"} onClick={e => e.stopPropagation()}>
          <h3>Create new board</h3>
          <label>Title
            <input type='text' placeholder='Enter board name' className='modal-board__input' onChange={handleChange} />
          </label>
          <button className='modal-board__button' onClick={handleCreate}>
            Create board
          </button>
          </div>
      </div>
    </>
  );
}
