import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.length > 0 ? (
      movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
    ) : (
      <p>No movies available</p>
    )}
  </div>
);
