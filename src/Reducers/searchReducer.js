import {
    SEARCH_IMAGE, 
    FETCH_IMAGES,
    LOADING,
    FETCH_IMAGES_RANDOM
} from '../Action/actionTypes'

const initialState = {
    text: '',  
    images: [], 
    loading: false, 
}


const searchReducer =(state = initialState, action)=>{
     console.log(action.payload);
    switch(action.type){
        case SEARCH_IMAGE:
            return {
                ...state,               
                text: action.payload,   
                loading: false          
            }
        case FETCH_IMAGES:
            return {
                ...state,
                images: action.payload,     
                loading: false              
            } 
        case FETCH_IMAGES_RANDOM:
            return {
                ...state,
                images: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
export default searchReducer;