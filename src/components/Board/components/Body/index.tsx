import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Header } from '../Header';
import { Board } from '../Board';
import { getBoardById } from '../../../../service/boards';
import { Board as BoardData } from '../../../../models/boards';
import { Spinner } from '../../../../common/Spinner';
import 'index.scss';


export function Body() {
  const {id} = useParams();
   
  const { data } = useSWR<BoardData>(id, getBoardById);
  
  if (!data) {
    return <Spinner />
  }  
   
  return (
    <div className='board'>
        <Header title={data.attributes.title}/>
        <Board tasks={data.attributes.tasks.data} id={id}/>  
    </div>
  )
}