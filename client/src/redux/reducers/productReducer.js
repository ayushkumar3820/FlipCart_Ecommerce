import * as actionTypes from '../constants/productConstants';

export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS:
        return {products:action.payload}
        case actionTypes.GET_PRODUCTS_FAIL:
        return {err:action.payload}
        default:return state
    }


}