import './App.scss';
import { Sidebar } from './components/Sidebar';
import { BoardsMain } from './components/Board';

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <BoardsMain />
    </div>
  );
}
