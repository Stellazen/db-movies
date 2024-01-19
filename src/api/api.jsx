const API_URL = 'https://api.themoviedb.org';

const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2JkZjhkOGIyYTdmMmQzMDVjZTA1MzBjNDBjNjk5YyIsInN1YiI6IjY1OGQ5M2UyMjBlNmE1MGJmNjhiNDkxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1BcZAua4_pHWrLhnXUHGpdHKuo5kL3mhF_MVqwRjoSQ'
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
