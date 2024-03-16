import axios from 'axios';

const URL='http://localhost:8000';
export const authenticatesignup=async(data)=>{
    try{
          const aa=await axios.post(`${URL}/signup`,data);
          console.log(aa);
    }
    catch(error){
        console.log("Error while calling singup api ",error);
    }
}


