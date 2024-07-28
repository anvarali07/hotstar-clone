import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "6f84992d8e1ab8c2b801101f4616a9b7"
const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie?"

//https://api.themoviedb.org/3/trending/all/day?api_key=6f84992d8e1ab8c2b801101f4616a9b7
//https://api.themoviedb.org/3https://api.themoviedb.org/3/movie/popular

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getPopularMovies = axios.get(movieBaseUrl+"/movie/popular?api_key="+api_key)
const getUpcoimingMovies = axios.get(movieBaseUrl+"/movie/upcoming?api_key="+api_key)
const getTopRatedMovies = axios.get(movieBaseUrl+"/movie/top_rated?api_key="+api_key)
const getMovieByGenreId = (id) => {
    return axios.get(movieByGenreBaseUrl+"with_genres="+id+"&api_key="+api_key) 
}

export default{
    getTrendingVideos,
    getPopularMovies,
    getUpcoimingMovies,
    getTopRatedMovies,
    getMovieByGenreId
}