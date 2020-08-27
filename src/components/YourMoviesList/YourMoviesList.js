import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';

import classes from './YourMoviesList.module.scss';
import { GET_MOVIES_BY_USER, DELETE_MOVIE } from '../../queries';

const YourMoviesList = (props) => {
  const { userId } = props;

  // get all movies of current user
  const data = useQuery(GET_MOVIES_BY_USER, {
    variables: { userId: userId },
  }).data;

  const [deleteMovie, { loading, error }] = useMutation(DELETE_MOVIE, {
    onCompleted(data) {
      Swal.fire('Success!', 'You delete the movie successfully!', 'success');
    },
    onError(error) {
      Swal.fire('Error!', 'Something wrong happened!', 'error');
    },
  });

  const onDeleteMovie = (movieId) => {
    deleteMovie({
      variables: { id: movieId },
      refetchQueries: [
        {
          query: GET_MOVIES_BY_USER,
          variables: { userId: userId },
        },
      ],
    });
  };

  if (data) {
    return (
      <div className={classes.yourMoviesList}>
        {data.moviesByUser.map((movie) => (
          <figure className={classes.movie} key={movie.name}>
            <div
              className={classes.moviePosterContainer}
              style={{ backgroundImage: `url(${movie.coverImage})` }}
            ></div>
            <figcaption className={classes.movieTitle}>{movie.name}</figcaption>
            <div className={classes.btnRow}>
              <Link
                to={{
                  pathname: `/movie/${movie._id}/edit`,
                  state: { movie: movie },
                }}
                className={classes.btn + ' ' + classes.btnEdit}
              >
                Edit
              </Link>
              <button
                className={classes.btn + ' ' + classes.btnDelete}
                onClick={() => onDeleteMovie(movie._id)}
              >
                Delete
              </button>
            </div>
          </figure>
        ))}
      </div>
    );
  }
  return null;
};

export default YourMoviesList;
