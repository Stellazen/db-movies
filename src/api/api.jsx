import { TOKEN } from '../config'
const API_URL = 'https://api.themoviedb.org';


const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  };

  try {
    const response = await fetch(`${API_URL}/3/movie/popular?language=en-US&page=1`, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getPopularMovies };