import { useEffect, useState } from 'react';
import './index.css';
import { getPopularMovies } from './api/api';
import Poster from './components/poster/Poster';

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
       <h1 className="text-3xl font-bold underline">
      Hello world!
        </h1>
      <div id="movieList">
      {movies && movies.map(movie => (
              <Poster 
              id = {movie.id}
              title = {movie.title}
              overview = {movie.overview}
              photo = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
      ))}
            </div>
    </div>
  );
}

export default App;