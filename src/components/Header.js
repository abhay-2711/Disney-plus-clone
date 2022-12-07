import styled from "styled-components";
import logo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import watchList from "../images/watchlist-icon.svg";
import originals from "../images/original-icon.svg";
import movies from "../images/movie-icon.svg";
import series from "../images/series-icon.svg";
import searchIcon from "../images/search-icon.svg";
// import search from "../images/search1-icon.svg";

import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useState,useEffect } from "react";  
  
let mydata;

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

//movie
  const [data, setData] = useState({
    moviename:"",
  })
  
  // const [movie, setMovie] = useState([]);

  // const [movie, setMovie] = useState("");
  
  
  function handlechange(event){
  
    const { value, name } = event.target;
  
    setData((prevValue) => {
      if (name === "moviename") {
        return {
          moviename: value,
        };
      }
    });
    mydata=event.target.value;
    console.log(mydata);
  }
  
  function handlesubmit(event){
    // console.log(event.target.value)
    event.preventDefault();
  }
  
  // function handleclick() {
  //   setMovie((prevData) => {
  //     return [...prevData, data];
  //   });
  //   setData({
  //     moviename:"",
  //   });
  // }

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src={homeIcon} alt="Home" />
              <span>HOME</span>
            </a>
            <a href="/watchlist">
              <img src={watchList} alt="watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src={originals} alt="originals" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src={movies} alt="movies" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src={series} alt="series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Search>
            <div>
            <form onSubmit={handlesubmit}>
              <input 
              type="text" 
              name="moviename" 
              value={data.moviename}
              onChange={handlechange}
              placeholder="Search a Movie..."
              />
              {/* <button type="submit" onClick={handleclick}>Submit</button> */}
              </form>
            </div>
            <SearchIcon>
              <img src={searchIcon} alt="" />
            </SearchIcon>
          </Search>
          
          <SearchButton>Search</SearchButton>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgba(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media(max-width:768px){
        display: none;
    } */
`;

const Search = styled.div`
    /* border:2px solid red; */
    opacity: 1;
    /* flex-grow: 1; */
    transform: translateX(-25vw);
    position: relative;
    left: 20px;
    & > div{
        max-width: 500px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 500px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon=styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0/ 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 101px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const SearchButton = styled.a`
    /* flex-grow: 1; */
    transform: translate(-23vw);
    position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
