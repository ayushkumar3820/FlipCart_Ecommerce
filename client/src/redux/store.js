import {createStore ,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer.js';
import { getProductsReducer,getProductDetailsReducer } from './reducers/productReducer.js';
import { wishReducer } from './reducers/WishReducer.jsx';
import { checkoutReducer } from './reducers/checkoutReducer.js';

const reducer=combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer,
    wishList: wishReducer,
    checkout: checkoutReducer
}
)


const middlerware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlerware))
)

export default store ;