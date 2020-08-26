import React from 'react';

import Review from './Review/Review';
import classes from './ReviewList.module.scss';

const ReviewList = (props) => {
  if (props.reviews.length > 0) {
    return (
      <div className={classes.reviewList}>
        {props.reviews.map((review) => (
          <Review key={review} review={review} />
        ))}
      </div>
    );
  }
  return <h4>No review has not been created for this movie</h4>;
};

export default ReviewList;
