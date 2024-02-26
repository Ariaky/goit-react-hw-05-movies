import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = '9a639d3564cd390570959ad83ff8674f';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_DAY = '/trending/movie/day';
const LANGUAGE = 'en-US';
const SEARCH_QUERY = '/search/movie';
const MOVIE_BY_ID = '/movie';
const CAST = '/credits';
const REVIEWS = '/reviews';

export const fetchMovies = async () => {
    try {
       const { data } = await axios.get(`${BASE_URL}${TRENDING_DAY}?api_key=${API_KEY}&page=1&language=${LANGUAGE}`);
       return data.results;
    }
    catch (error) {
        console.log(`An error occurred: ${error.message}`);
        Notify.failure(`An error occurred: ${error.message}`);
    }
}

export const fetchMoviesByQuery = async (query, page = 1) => {
    try {
        const { data } = await axios.get(
      `${BASE_URL}${SEARCH_QUERY}?query=${query}&api_key=${API_KEY}&page=${page}&language=${LANGUAGE}`
    );
    return data.results;
    }
    catch (error) {
        console.log(`An error occurred: ${error.message}`);
        Notify.failure(`An error occurred: ${error.message}`);
    }
  };
  
export const fetchMoviesById = async id => {
    try { 
    const { data } = await axios.get(
      `${BASE_URL}${MOVIE_BY_ID}/${id}?api_key=${API_KEY}&language=${LANGUAGE}`
    );
    return data;
    }
    catch (error) {
        console.log(`An error occurred: ${error.message}`);
        Notify.failure(`An error occurred: ${error.message}`);
    }
  };
  
  export const fetchMoviesByCast = async id => {
    try {
    const { data } = await axios.get(
      `${BASE_URL}${MOVIE_BY_ID}/${id}${CAST}?api_key=${API_KEY}&language=${LANGUAGE}`
    );
    return data.cast;
    }
    catch (error) {
        console.log(`An error occurred: ${error.message}`);
        Notify.failure(`An error occurred: ${error.message}`);
    }
  };
  
  export const fetchMoviesByRewiews = async id => {
    try {
    const { data } = await axios.get(
      `${BASE_URL}${MOVIE_BY_ID}/${id}${REVIEWS}?api_key=${API_KEY}&language=${LANGUAGE}`
    );
    return data.results;
    }   
    catch (error) {
        console.log(`An error occurred: ${error.message}`);
        Notify.failure(`An error occurred: ${error.message}`);
    }
  };
