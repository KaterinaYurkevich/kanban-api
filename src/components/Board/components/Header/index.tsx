import { useState, useEffect } from 'react';
import { getBoardById } from '../../../../service/boards';
import menuImg from '../../menu.png';
import './header.scss';
import { ModalAddTask } from './components/Modal/ModalAddTask';

type Props = {
  id: string;
};

export function Header({id}: Props) {
  
  console.log(id);

  const [state, setState] = useState<string | null>(null);
  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    getBoardById(id).then(data => setState(data.attributes.title));
    console.log(state);
  }, []);

  const handleShowModal = () => {
    setModalActive(true);
  }

  return (   
    <> 
    <div className='header'>
      <h2 className='header__title'>Board</h2>
      <div className='header-wrapper'>
        <button className='header__button' onClick={handleShowModal}>+ Add New Task</button>
        <img src={menuImg} alt="logo" className='header__img' />
      </div>
    </div>
    <ModalAddTask 
    //active={modalActive} setActive={setModalActive} 
    />
    </>    
  )
}