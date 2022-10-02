import { useParams } from 'react-router-dom';
import { Header } from '../Header';
import { Board } from '../Board';
import './body.scss';

type QuizParams = {
  id: string;
};

export function Body() {
   const id = useParams<QuizParams>();
   console.log(id);   
   
  return (
    <div className='board'>
        <Header id={id} />
        <Board />  
    </div>
  )
}