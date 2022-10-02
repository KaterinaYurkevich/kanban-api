import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { createBoard, getAllBoards } from '../../service/boards';
import { Spinner } from '../../common/Spinner';
//import { Switch } from '../../common/Switch';
import './Sidebar.scss';
import { Navbar } from './components/Navbar';
import logoImg from './images/logo.png';
import iconImg from './images/icon-board.png';

export type Board = {
  id: number,
  attributes: {
    createdAt: string,
    publishedAt: string,
    title: string,
    updateAt: string,
  },
  status?: boolean,
}

export function Sidebar() {
  const [state, setState] = useState<Board[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllBoards().then(data => setState(data));
    setIsLoading(false);
  }, [])

  function handleCreateBoard() {
    createBoard('123');
  }

  return (
    <div className='sidebar-wrapper'>
      <div className='sidebar'>
        <div className='sidebar__header'>
          <img src={logoImg} alt="logo" className='sidebar__img' />
          <h1>kanban</h1>
        </div>
        <Row style={{ marginBlock: '20px' }}>
          <Col>
            <h3 className='sidebar__title'>All boards ({state?.length ? state?.length : 0})</h3>
          </Col>
        </Row>
        {isLoading ? <Spinner /> : <Navbar list={state!} />}
        <button className='sidebar__button' onClick={handleCreateBoard}>
          <img src={iconImg} alt="icon" className='sidebar__img'/>
          + Create New Board
        </button>
      </div>
      {/*<Switch />*/}
    </div>
  )
}
