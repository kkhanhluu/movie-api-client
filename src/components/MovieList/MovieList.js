import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_MOVIES } from '../../queries';
import MovieCard from './MovieCard/MovieCard';
import classes from './MovieList.module.scss';

const MovieList = () => {
  const { loading, err, data } = useQuery(GET_MOVIES);
  console.log(data);
  if (data && data.movies.length > 0) {
    return (
      <div className={classes.movieList}>
        {data.movies.map((movie) => (
          <MovieCard key={movie._id} {...movie} />
        ))}
      </div>
    );
  }
  return null;
};

export default MovieList;
