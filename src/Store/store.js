import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import reducer from "../Reducers/reducer";

const middleware = [reduxThunk]; 
const initialState= {};

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;