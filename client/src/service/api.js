import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}


export const payUsingPaytm = async (data) =>{
    try{

        let reponse= await  axios.post(`${url}/payment`,data);
        console.log(reponse.data);
         return  reponse;
    }
    catch(error){
        console.log('Error',error);
    }
} 
