import { useState, useEffect } from 'react';
import { Tasks } from '../index';
import { TaskItem } from './TaskItem';
import '../Board.scss';

type Props = {
  list: Tasks[],
}

export function DoneTasks({ list }: Props) {
    const [state, setState] = useState<Tasks[] | null>(list);
    
  useEffect(() => {
    let filteredData = list?.filter(data => data.attributes.status === 'done');
    setState(filteredData);    
  }, list)
  

  return (
    <section className='task-wrapper'>
        <h3 className='task__title task__title__done'>DONE ({state?.length ? state?.length : 0})</h3>
        <ul className='tasks'>
          {state?.map(task => <TaskItem key={task.id} data={task} />)}
        </ul>
    </section>
  )
} 