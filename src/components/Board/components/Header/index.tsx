import { useState, useEffect } from 'react';
import { getBoardById } from '../../../../service/boards';
import menuImg from '../../menu.png';
import './header.scss';
import { ModalAddTask } from '../../../../common/ModalAddTask/ModalAddTask';

type Props = {
  id: string;
};

export function Header({id}: Props) {
  
  console.log(id);

  const [state, setState] = useState<string | null>(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    getBoardById(id).then(data => setState(data.attributes.title));
    console.log(state);
  }, []);

  const handleActive = () => setActive(true);
  const handleInActive = () => setActive(false);

  return (   
    <> 
    <div className='header'>
      <h2 className='header__title'>Board</h2>
      <div className='header-wrapper'>
        <button className='header__button' onClick={handleActive}>+ Add New Task</button>
        <img src={menuImg} alt="logo" className='header__img' />
      </div>
    </div>
    <ModalAddTask 
    active={active} setActive={handleInActive} 
    />
    </>    
  )
}