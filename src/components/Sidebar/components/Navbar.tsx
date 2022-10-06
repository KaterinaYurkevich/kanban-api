import { NavbarItem } from './NavbarItem';
import { Board } from '../../../models/boards';
import 'index.scss';

type Props = {
  list: Board[],
}

export function Navbar({ list }: Props) {
  
  return (
    <nav>
      <ul className='navbar'>
          {list?.map(board => <NavbarItem key={board.id} data={board} />)}
      </ul>
    </nav>
  )
} 