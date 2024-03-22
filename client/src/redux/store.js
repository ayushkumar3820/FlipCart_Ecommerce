import {createStore ,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductsReducer } from './reducers/productReducer.js';
import { getProductDetailsReducer } from './reducers/productReducer.js';
const reducer=combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer
}
)


const middlerware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlerware))
)

export default store ;