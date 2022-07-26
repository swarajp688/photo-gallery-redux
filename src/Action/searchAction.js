import {SEARCH_IMAGE, FETCH_IMAGES , FETCH_IMAGES_RANDOM, LOADING  } from './actionTypes'
import axios from 'axios'
const baseURL = 'https://api.unsplash.com/';
const API_KEY=process.env.REACT_APP_API_KEY
export const searchMovie = (text) => dispatch => {
    dispatch({
        type: SEARCH_IMAGE,
        payload: text
    })
}

export const fetchSearchImages = (text) => async dispatch => {
    const url = new URL(`${baseURL}/search/photos`);
  url.search = new URLSearchParams({
    per_page: 30,
    query: text,
  });
    try{
        const response = await axios.get(url, {
            headers: {
              Authorization: `Client-ID ${API_KEY}`,
            },
          });
        dispatch({
            type: FETCH_IMAGES,
            payload: response.data.results
        })
    }
    catch(err){
        alert(err)
    }
}

export const fetchRandomImages = () => async (dispatch) => {
    try{
        const response = await axios.get(`${baseURL}photos/random?count=30&client_id=${API_KEY}`);
        dispatch({
            type: FETCH_IMAGES_RANDOM,
            payload: response.data
        })
    }catch(err){
        alert(err)
    }
}

export const setLoading = () => {
    return {
        type: LOADING,
    }
}
