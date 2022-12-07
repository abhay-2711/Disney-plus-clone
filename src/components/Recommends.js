import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "388fddf8a9727d1ba2334256826ee373";
const API_URL = "https://api.themoviedb.org/3";
const API_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// get movie data from api
const getMovieData = async (movieName) => {
  const response = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`
  );
  return response.data.results;
};

// get movie image from api

const getMovieImage = (moviePoster) => {
  return `${API_IMAGE_URL}${moviePoster}`;
};

const getMoviePoster = async (movieName) => {
  const movieData = await getMovieData(movieName);
  const moviePoster = movieData[0].poster_path;
  const moviePosterUrl = getMovieImage(moviePoster);
  return moviePosterUrl;
};
const getMovieUrl = async (movieName) => {
  const movieData = await getMovieData(movieName);
  const movieUrl = movieData[0].backdrop_path;
  const movieUrlUrl = getMovieImage(movieUrl);
  return movieUrlUrl;
};
let x = getMovieUrl("Titanic");
let y;
x.then((value) => {
  y = value;
});
// console.log(y)
const Recommends = (props) => {
  return (
    <Container>
      {/* <img src={y} alt="" /> */}
      <h4>Recommend for You</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src={y}
              alt=""
            />           
          </Link>
        </Wrap>
 
        <Wrap>
          <Link to="/">
            <img
              src="https://lolalambchops.com/wp/wp-content/uploads/2019/11/Marvel-on-disney-plus-735x414.jpeg.webp"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://lolalambchops.com/wp/wp-content/uploads/2019/11/Marvel-on-disney-plus-735x414.jpeg.webp"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://lolalambchops.com/wp/wp-content/uploads/2019/11/Marvel-on-disney-plus-735x414.jpeg.webp"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16p,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends;
