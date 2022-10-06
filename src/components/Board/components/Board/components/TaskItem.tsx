import { Link } from 'react-router-dom';
import { Task } from '../../../../../models/task';
import 'index.scss';

type Props = {
  data: Task,
  id: string | undefined,
}

export function TaskItem({ data, id } : Props) {  
  return (
    <div className='task_item'>
        <Link className='task_item__link' key={data.id} to={`/boards/${id}/${data.attributes.title}`} >
            <h4 className='task_item__title'>{data.attributes.title}</h4>
            <p className='task_item__text'>{data.attributes.description}</p>
        </Link>
    </div>
  )
} 