import { useState, useEffect } from 'react';
import { Tasks } from '../index';
import { TaskItem } from './TaskItem';
import '../Board.scss';

type Props = {
  list: Tasks[],
}

export function TodoTasks({ list }: Props) {
    const [state, setState] = useState<Tasks[] | null>(list);
    
  useEffect(() => {
    let filteredData = list?.filter(data => data.attributes.status === 'todo');
    setState(filteredData);    
  }, list)
 
  return (
    <section>
        <h3 className='task__title'>TODO ({state?.length ? state?.length : 0})</h3>
        <ul className='tasks'>
          {state?.map(task => <TaskItem key={task.id} data={task} />)}
        </ul>
    </section>
  )
} 