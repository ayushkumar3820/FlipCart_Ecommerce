
import axios from "axios";
import * as actionTypes from '../constants/productConstants';

const url = 'http://localhost:8000';
export const getProducts=()=>async(dispatch)=>{
    try{
        let {data}=await axios.get(`${url}/products`)
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data});
    }
    catch(err){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:err.messsage});
    }

}