import axios from 'axios';

export async function getAllBoards() {
  const response = await axios.get('http://localhost:1337/api/boards');
  return response.data.data;
}

export async function getBoardById(id: string) {
  const response = await axios.get(`http://localhost:1337/api/boards/${id}/?populate=*`);
  return response.data.data;
}

export async function createBoard(title: string) {
  const route = title.split(' ').join('-').toLowerCase();

  const response = await axios.post('http://localhost:1337/api/boards', {
    data:{
      title,
      route,
    }
    
  })
  console.log(response);
}
