import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MovieCard.module.scss';

const MovieCard = (props) => {
  const { name, ratingsAverage, releaseDate, _id, coverImage } = props;
  console.log(props);
  return (
    <figure className={classes.movie}>
      <div
        className={classes.moviePosterContainer}
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <Link to={'movie/' + _id}>
          <div className={classes.movieOverlay}>
            <div className={classes.movieOverlayTitle}>{name}</div>
            <div className={classes.movieOverlayVote}>{ratingsAverage} / 5</div>
            <div className={classes.movieOverlayOverview}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </div>
          </div>
        </Link>
      </div>
      <figcaption className={classes.movieTitle}>{name}</figcaption>
      <figcaption className={classes.movieDate}>
        {new Date(+releaseDate).toLocaleDateString()}
      </figcaption>
    </figure>
  );
};

export default MovieCard;
