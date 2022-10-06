import { useState } from 'react';
import { Link } from 'react-router-dom';
import iconImg from '../images/icon-board.png';
import { Board } from '../../../models/boards';
import 'index.scss';

type Props = {
  data: Board,
}

export function NavbarItem({ data } : Props) {
  const [isActive, setIsActive] = useState('navbar__link');

  //function handleActive(data.id) {
  //  data.status = true;
  //  if (data.status) {
  //    setIsActive('navbar__link navbar__link__active');
  //  }
  //    setIsActive('navbar__link'); 
  //}

  return (
    <Link className={isActive} key={data.id} to={`/boards/${data.id}`}>
      <div  
      //onClick={handleActive}
      >
        <img className='navbar__img' src={iconImg} alt="icon" />
        {data.attributes.title}
      </div>
    </Link>
  )
} 