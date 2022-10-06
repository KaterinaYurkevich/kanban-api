import { useState, useEffect } from 'react';
import { Task } from '../../../../../models/task';
import { TaskItem } from './TaskItem';
import 'index.scss';

type Props = {
  list: Task[],
  id: string | undefined,
}

export function TodoTasks({ list, id }: Props) {
    const [state, setState] = useState<Task[] | null>(list);
    
  useEffect(() => {
    let filteredData = list?.filter(data => data.attributes.status === 'todo');
    setState(filteredData);    
  }, list)
 
  return (
    <section>
        <h3 className='task__title task__title__todo'>TODO ({state?.length ? state?.length : 0})</h3>
        <ul className='tasks'>
          {state?.map(task => <TaskItem key={task.id} data={task} id={id} />)}
        </ul>
    </section>
  )
} 