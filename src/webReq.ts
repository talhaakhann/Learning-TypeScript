// how to install types of someLib

// npm i -D @types/some-lib

import axios, { type AxiosResponse,isAxiosError } from "axios";

axios.get('https://example.com')
.then((response)=>{
    console.log(response.data);
})


interface Todo{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

const fetchData=async()=>{
    try {
        const response:AxiosResponse<Todo>=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response.data);
        
    } catch (error:any) {
        if(error.isAxiosError(error)){
            console.log("Axios Error",error);
            if(error.response){
                console.log(error.response.status);
                
            }
        }
    }
}

fetchData()