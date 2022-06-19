import { useEffect, useState } from 'react';
import MovieListHeading from '../components/MovieListHeading';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';


 const MovieContent = (props) =>{

    const [movie, setMovie] = useState([]);
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequests = async(searchValue) =>{
      const url = `http://www.omdbapi.com/?s=${searchValue}&page=1-9&apikey=e5254305`;
  
      const response =await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.Search){
        setMovies(responseJson.Search);
      }
    };
  
    useEffect(()=>{
      getMovieRequests(searchValue);
    }, [searchValue]);

    const getMovieRequest = async(searchValue) =>{
        const url =`https://www.omdbapi.com/?apikey=e5254305&i=${props.location.state.movie.imdbID}` ;
    
        const response =await fetch(url);
        const responseJson = await response.json();
    
        if (responseJson){
          setMovie(responseJson);
        }
      };

      getMovieRequest();

    return(
        <div className="content">
          <div className="album">
      <div className="container movie-app">
        <div className='row d-flex align-items-center mt-4 mb-4'>
        <a style={{textDecoration: 'none' ,border: 'none', margin: '0%', padding: '0%'}} href='/'><MovieListHeading  heading="Home"/></a>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList
        movies={movies}
        />
        </div>
        </div>
            <img className="bd-placeholder-img card-img-top image-itself" alt="movie poster" src={props.location.state.movie.Poster} style={{objectFit: 'contain', transition: 'transform 0.2s'}}/>
            <h1>{movie.Title} <span className='right small'>{movie.Year}  {movie.Rated}</span></h1>
            <div className='content-info'>
                <p><span className='little-header'>Cast</span>: {movie.Actors}, <u>Directors:</u> {movie.Director}, <u>Writers:</u> {movie.Writer} </p>
                <p><span className='little-header'>Genre</span>: {movie.Genre}, <u>Released:</u> {movie.Released} <span className='right small'>{movie.Runtime}</span></p>
                <p><span className='little-header'>Language</span>: {movie.Language}, <u>Country:</u> {movie.Country} <span className='right'>Rating: {movie.imdbRating}</span> </p>
                <p><span className='little-header'>Plot</span>: {movie.Plot}</p>
                <p><span className='little-header'>Box-office</span>: {movie.BoxOffice}</p>
            </div>
        </div>
    );
}

export default MovieContent;