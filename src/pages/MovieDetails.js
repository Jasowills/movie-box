import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DetailsPage from '../components/DetailsPage';
import axios from 'axios'; // Import Axios

const MovieDetails = () => {
  const { id } = useParams();

  // API parameters
  const params = {
    api_key: '45f8b43cf424cf6764e9fd6172b5322c',
  };

  const [movieData, setMovieData] = useState(null); // Store movie details here
  const [error, setError] = useState(false); // State for error handling

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: params,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const data = response.data;
          console.log(data)
          setMovieData(data); // Store the movie details in state
        } else {
          setError(true); // Set error state to true
        }
      } catch (error) {
        console.error('Error:', error);
        setError(true); // Set error state to true
      }
    };

    fetchMovieDetails();
  }, [id, params]);

  return (
    <div className="movie-details">
      <Sidebar />
      {error ? (
        <div className="error-message">Movie not found!</div>
      ) : (
        movieData && <DetailsPage movieData={movieData} /> // Pass movieData as a prop if it exists
      )}
    </div>
  );
};

export default MovieDetails;
