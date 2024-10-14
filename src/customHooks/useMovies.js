import results from '../datamocks/results.json';
import error from '../datamocks/error.json';

export function useMovies() {
  const movies = results.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
  return { movies: mappedMovies };
}
