import axios from "axios";
import * as actionTypes from '../constants/productConstants';

const url = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    }
};

 const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${url}/product/${id}`); // Fixed endpoint
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data }); // Fixed action type
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error });
    }
};


export default getProductDetails;