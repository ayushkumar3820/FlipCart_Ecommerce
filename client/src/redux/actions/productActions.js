
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


export const getProductsDetalis = () => async (dispatch)=>{
    try{
             dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_REQUEST})
             let {data}=await axios.get(`${url}/products`)
             dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_SUCCESS,payload:data});
    }
    catch (error){
        dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_FAIL,payload:error });

    }

}