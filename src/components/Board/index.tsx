import { Routes, Route } from 'react-router-dom';
import { Body } from './components/Body';

export function BoardsMain() {
  return (
    <>           
        <Routes>                 
            <Route path='/boards/:id' element={<Body />} />          
        </Routes>
    </>
  )
}