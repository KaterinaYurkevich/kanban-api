import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BoardsMain, Sidebar } from './components';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Sidebar />
        <BoardsMain />
      </div>
    </QueryClientProvider>
  );
}
