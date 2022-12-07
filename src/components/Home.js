import React from "react";
import styled from "styled-components";
import homeBackground from "../images/home-background.png";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <Container>
      <ImageSlider />
      {/* <img src={homeBackground} alt="" /> */}
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  border: 1px solid;

  img {
      background-repeat: no-repeat;
      background-attachment: local;
      background-position: center;
      background-size: cover;
      width: 92vw;
      height: 60vh;
    }

   &:after {
    /* background: url("src/images/home-background.png") center center/cover no-repeat fixed; */
    background: center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
