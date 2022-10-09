import axios from "axios";

type BodyTask = {
  title: string,
  description: string,
  status: string,
  boardsTitle: string,
}

export async function getAllTasks(id: string) {
  const response = await axios.get(`http://localhost:1337/api/boards/${id}/?populate=*`);
  return response.data.data;
}

export async function addNewTask({title, description, status, boardsTitle}: BodyTask) {
  const route = title.split(' ').join('-').toLowerCase();

  const response = await axios.post('http://localhost:1337/api/tasks/?populate=*', {
    data: {
      title,
      description,
      status,
      route
      //boards: {
      //  data: {
      //    boardsTitle
      //  }
      //}
    }
  })

if (!response) {
  console.log(boardsTitle);
} else console.log(title);

  //return response
} 