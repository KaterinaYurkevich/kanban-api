import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem } from './NavbarItem';
import { Board } from '../index';
import '../Sidebar.scss';

type Props = {
  list: Board[],
}

export function Navbar({ list }: Props) {
  //const [newlist, setNewList] = useState(list);
  
  //const handleActiveBoard = (id : number) => {
  //  let newlist = list.map(item => {
  //    if (item.id === id) {
  //      item.status = true
  //    } else {item.status = false};
  //  });
  //  setNewList(newlist);
  //}

  return (
    <nav>
      <ul className='navbar'>
          {list?.map(board => <NavbarItem key={board.id} data={board} />)}
      </ul>
    </nav>
  )
} 