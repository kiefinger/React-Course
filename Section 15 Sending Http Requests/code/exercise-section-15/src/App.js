import React, {useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState (null);

    const cors = require("cors");

  function fetchMoviesHanler(){
    fetch ( 'https://swapi.dev/api/films/' ).then(
        response => {
          return response.json();
        }
    ).then( data => {
      const transformedMOvies = data.results.map( (film) => {
        console.log(film);
        return {
          id: film.episode_id,
          title: film.title,
          openingText: film.opening_crawl,
          releaseDate: film.release_date,
        }
      })
      setMovies(transformedMOvies);
      console.log("Data loaded")
    })
  }

  useEffect(() => {
    //fetchMoviesHandler2();
  }, [fetchMoviesHandler2]);
  async function fetchMoviesHandler2(){
    setIsLoading(true);
    setError(null);
    try {
      const response = await  fetch ( 'https://tasks-fdf69-default-rtdb.firebaseio.com/movies.json' );
      if ( !response.ok) {
        throw new Error ( 'There was an http error: ' + response.status);
      }
      const data = await response.json();
      const transformedMOvies = [];

      for (const key in data) {
        transformedMOvies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(transformedMOvies);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setIsLoading(false);
  }

  async function addMovieHandler(movie) {
    console.log("add movie handler" + movie);
    try {
      const response = await fetch ( 'https://tasks-fdf69-default-rtdb.firebaseio.com/movies.json' , {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"
        },
        body: JSON.stringify((movie)),
      });
      if ( !response.ok ) {
         throw Error( response.statusMessage );
      }
      const data = await response.json();
      console.log("action finished");
    } catch ( error ) {
      console.log( "ErrorHandler: " + error);
    }

  }

  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler2}>Fetch Movies</button>
      </section>
      <section>
        { !isLoading && movies.length >0   &&  <MoviesList movies={movies} /> }
        { !isLoading && movies.length ===0 &&  <p>No movies</p> }
        { isLoading && <p>Loading</p> }
        { !isLoading &&  error  && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
