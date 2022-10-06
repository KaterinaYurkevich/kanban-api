import { Row, Col } from 'react-bootstrap';
import { TodoTasks } from './components/TodoTasks';
import { DoingTasks } from './components/DoingTasks';
import { DoneTasks } from './components/DoneTasks';
import { Task } from '../../../../models/task';
import 'index.scss';

type Props = {
  tasks: Task[],
  id: string | undefined,
}

export function Board({ tasks, id }: Props ) {
 
  return (
    <div className='board__body'>
      <Row style={{ marginBlock: '20px' }}>
        <Col style={{ padding: '0 5px' }}>
          <TodoTasks list={tasks!} id={id}/>
        </Col>
        <Col style={{ padding: '0 5px' }}>
          <DoingTasks list={tasks!} id={id}/>
        </Col>
        <Col style={{ padding: '0 5px' }}>
          <DoneTasks list={tasks!} id={id}/>
        </Col>
      </Row>
    </div>
  )
}
