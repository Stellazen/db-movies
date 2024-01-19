import React, { useEffect, useState } from 'react';
import './App.css';
import { getPopularMovies } from './api/api';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies)
      } catch (error){
        console.log('Não foi possível renderizar filmes')
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="App">
       <h1>Popular Movies</h1>
      <div id="movieList">
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
