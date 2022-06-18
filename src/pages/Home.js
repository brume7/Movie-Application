import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import Favourities from '../components/Favourities';

function Home() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async(searchValue) =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&page=1-9&apikey=e5254305`;

    const response =await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <div className="album">
      <div className="container movie-app">
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading  heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList
        movies={movies}
        />
      </div>
      <div className="container movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading  heading="Favourities"/>
        </div>
        <Favourities/>
      </div>
    </div>
  );
}

export default Home;
