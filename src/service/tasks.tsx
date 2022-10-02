import axios from 'axios';

export async function getAllTasks() {
    const response = await axios.get('http://localhost:1337/api/tasks');
    return response.data.data;   
}
  