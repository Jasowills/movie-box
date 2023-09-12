import React from 'react';
import Imdb from './Imdb';
import TomatoLogo from './Tomato';

const MovieCard = ({ movie }) => {
  // Calculate the percentage based on vote count
  const percentage = (movie.vote_count / 100).toFixed(1); // Adjust decimal places as needed

  return (
    <div className="movie-card" data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
        data-testid="movie-poster"
      />
      <h2 className="movie-title" data-testid="movie-title">
        {movie.title}
      </h2>
      <div className="movie-labels">
        <span>
          <Imdb /> &thinsp; {movie.vote_average * 10.0} / 100
        </span>
        <span>
          <TomatoLogo /> &thinsp; {percentage}%
        </span>
      </div>
      <p className="movie-release-date" data-testid="movie-release-date">
        Release Date: {movie.release_date}
      </p>
    </div>
  );
};

export default MovieCard;
