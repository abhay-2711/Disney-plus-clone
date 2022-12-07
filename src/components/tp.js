// movie data base api connection and functions code
import axios from 'axios';

const API_KEY = '388fddf8a9727d1ba2334256826ee373'
const API_URL = 'https://api.themoviedb.org/3';
const API_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// get movie data from api
const getMovieData = async (movieName) => {
    const response = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`);
    return response.data.results;
    }

// get movie image from api

const getMovieImage = (moviePoster) => {
    return `${API_IMAGE_URL}${moviePoster}`;
    }

module.exports = {
    getMovieData,
    getMovieImage
    }

// Path: index.js
// main code
const express = require('express');
const app = express();
const port = 3000;
const api = require('./api');

app.get('/', (req, res) => {
    res.send('Hello World!')
    }
    )

app.get('/movie/:movieName', async (req, res) => {
    const movieName = req.params.movieName;
    const movieData = await api.getMovieData(movieName);
    res.send(movieData);
    }
    )

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
    )

// Path: package.json
// package.json file
// {
//     "name": "movie-api",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//         "start": "node index.js"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//         "axios": "^0.21.1",
//         "express": "^4.17.1"
//     }
//     }

// Path: .gitignore
// git ignore file
// node_modules
// .env

// // Path: .env
// // environment variables file
// API_KEY = ' your api key '