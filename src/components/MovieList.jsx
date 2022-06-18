import ScrollContainer from 'react-indiana-drag-scroll';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const MovieList = (props) => {

  const history = useHistory();
  const [favourites, setFavourites] = useState([]);

    const saveToLocalStorage = (items) => {
      localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const viewClicked =(movie)=>{
      history.push({
        pathname: '/MovieContent',
        state: { movie }
      });
    }
  

    return(

        <ScrollContainer className="scroll-container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
        hideScrollbars={true}
        >
            
            {props.movies.map( (movie, index) => (
            <div className="row">
                <div className="card shadow-sm" style={{backgroundColor: 'transparent', border: 'none'}}>
                    <img className="bd-placeholder-img card-img-top image-itself" width="100%" height="225" alt="movie poster" src={movie.Poster} style={{objectFit: 'contain', transition: 'transform 0.2s'}}/>
                </div>
                <div className="card-body">
              <p className="card-text">{movie.Title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button id='viewBtn' type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{viewClicked(movie);}}>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary"onClick={()=>{
                    const newFavouriteList = [...favourites, movie];
                    setFavourites(newFavouriteList);
                    saveToLocalStorage(newFavouriteList);
                  }}>Add to favourities</button>
                </div>
                <small className="text-muted">{movie.Year}</small>
              </div>
            </div>
            </div>
        ) )} 
        </ScrollContainer> 
        
        
    );
}
export default MovieList;