import React from 'react';
import StarRatings from 'react-star-ratings';

import classes from './Review.module.scss';

const Review = (props) => {
  const { review } = props;
  return (
    <div className={classes.review}>
      <h3 className={classes.author}>{review.user.username}</h3>
      <div className={classes.rightContainer}>
        <p className={classes.reviewString}>{review.review}</p>
        <div className={classes.starContainer}>
          <StarRatings
            rating={review.rating}
            starRatedColor='gold'
            isSelectable={false}
            numberOfStars={5}
            name='rating'
            starDimension='30px'
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
