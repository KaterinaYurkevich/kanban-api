import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getAllTasks } from '../../../../service/tasks';
import { Spinner } from '../../../../common/Spinner';
import { TodoTasks } from './components/TodoTasks';
import { DoingTasks } from './components/DoingTasks';
import { DoneTasks } from './components/DoneTasks';
import './Board.scss';

export type Tasks = {
  id: number,
  attributes: {
    description: string | null,
    status: string,
    createdAt: string,
    publishedAt: string,
    title: string,
    updateAt: string,
  },
  active?: boolean,
};

export function Board() {
  const [state, setState] = useState<Tasks[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getAllTasks().then(data => setState(data));
    setIsLoading(false);  
  }, [])   

  return (
    <div className='board__body'>
      <Row style={{ marginBlock: '20px' }}>
        <Col style={{ padding: '0 5px' }}>
          {isLoading ? <Spinner /> : <TodoTasks list={state!} />}
        </Col>
        <Col style={{ padding: '0 5px' }}>
          {isLoading ? <Spinner /> : <DoingTasks list={state!} />}
        </Col>
        <Col style={{ padding: '0 5px' }}>
          {isLoading ? <Spinner /> : <DoneTasks list={state!} />}
        </Col>
      </Row>
    </div>
  )
}
