import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import Swal from 'sweetalert2';

import classes from './ReviewInput.module.scss';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW, GET_MOVIE_BY_ID } from '../../queries';

const ReviewInput = (props) => {
  const { movieId } = props;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const [addReview, { loading, error }] = useMutation(ADD_REVIEW, {
    onCompleted(data) {
      setRating(0);
      setReview('');
    },
    onError(error) {
      console.log(typeof error);
      if (error.message.includes('E11000 duplicate key error collection')) {
        Swal.fire('Error!', 'You already made a review!', 'error');
      } else if (error.message.includes('Not authenticated')) {
        Swal.fire('Error!', 'You must sign in to make a review!', 'error');
      }
    },
  });

  const onAddReview = () => {
    addReview({
      variables: {
        movie: movieId,
        rating: rating,
        review: review,
      },
      refetchQueries: [
        {
          query: GET_MOVIE_BY_ID,
          variables: { id: movieId },
        },
      ],
    });
  };

  return (
    <div className={classes.newReview}>
      <div className={classes.row}>
        <span>Your rating: </span>
        <StarRatings
          rating={rating}
          starRatedColor='gold'
          changeRating={setRating}
          numberOfStars={5}
          name='rating'
          starDimension='20px'
        />
      </div>
      <div className={classes.row}>
        <input
          type='text'
          placeholder='Write a review...'
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className={classes.reviewInput}
        />
        <button className={classes.submit} onClick={onAddReview}>
          <ion-icon name='send'></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default ReviewInput;
