import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tasks } from '../index';
import '../Board.scss';

type Props = {
  data: Tasks,
}

export function TaskItem({ data } : Props) {
//  const [isActive, setIsActive] = useState('navbar__link');

//  const handleActive = (data.id) => {
//    data.status = true;
//    if (data.status) {
//      setIsActive('navbar__link navbar__link__active');
//    }
//      setIsActive('navbar__link');
//    console.log(isActive);  
//  }


  return (
    <div className='task_item'>
        <Link className='task_item__link' key={data.id} to={`/board/${data.attributes.title}`} >
            <h4 className='task_item__title'>{data.attributes.title}</h4>
            <p className='task_item__text'>{data.attributes.title}</p>
        </Link>
    </div>
  )
} 