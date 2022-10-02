import axios from 'axios';

export async function getAllBoards() {
  const response = await axios.get('http://localhost:1337/api/boards');
  return response.data.data;
}

export async function getBoardById(id: string) {
  const response = await axios.get(`http://localhost:1337/api/boards/${id}`);
  return response.data.data;
  console.log(response.data.data);
}

export async function createBoard(title: string) {
  const response = await axios.post('http://localhost:1337/api/boards', {
    data:{
      title,
    }
    
  })
  console.log(response);
}
