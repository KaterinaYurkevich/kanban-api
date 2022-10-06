import { useState } from 'react';
//import { getBoardById } from '../../../../service/boards';
import menuImg from '../../menu.png';
import 'index.scss';
import { ModalAddTask } from '../../../../common/ModalAddTask/ModalAddTask';

type Props = {
  title: string,
};

export function Header({title}: Props) {
  const [isActive, setActive] = useState<boolean>(false);
  
  const handleActive = () => setActive(true);
  const handleInActive = () => setActive(false);

  return (   
    <> 
    <div className='header'>
      <h2 className='header__title'>{title}</h2>
      <div className='header-wrapper'>
        <button className='header__button' onClick={handleActive}>+ Add New Task</button>
        <img src={menuImg} alt="logo" className='header__img' />
      </div>
    </div>
    <ModalAddTask 
    isActive={isActive} setActive={handleInActive} boardTitle={title} 
    />
    </>    
  )
}