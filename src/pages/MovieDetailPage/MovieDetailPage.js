import React from 'react';
import { useQuery } from '@apollo/client';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Navbar from '../../components/Navbar/Navbar';
import { GET_MOVIE_BY_ID } from '../../queries';
import classes from './MovieDetailPage.module.scss';
import ActorList from '../../components/ActorList/ActorList';
import ReviewList from '../../components/ReviewList/ReviewList';
import ReviewInput from '../../components/ReviewInput/ReviewInput';

const MovieDetailPage = (props) => {
  const movieId = props.match.params.id;
  const { loading, err, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id: movieId },
  });

  const isAuthenticated = localStorage.getItem('token') !== null;

  if (data && data.movie) {
    const {
      coverImage,
      duration,
      name,
      ratingsAverage,
      ratingsQuantity,
      releaseDate,
      actors,
      reviews,
    } = data.movie;
    return (
      <div
        className={classes.container}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%), url(${coverImage})`,
        }}
      >
        <Navbar />

        <div className={classes.cardContainer}>
          <div className={classes.posterContainer}>
            <img
              className={classes.poster}
              src={coverImage}
              alt='movie poster'
            />
          </div>
          <div className={classes.dataContainer}>
            <h1 className={classes.movieTitle}>{name}</h1>
            <div className={classes.movieOverview}>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>
            </div>
            <div className={classes.additionalInformation}>
              <p className={classes.movieGenre}>
                {/* <span>{{genre.name}}, </span> */}
              </p>
              <p className={classes.movieProducers}>
                <span>{name}, </span>
              </p>
              <div className={classes.releaseDetails}>
                <div className={classes.row}>
                  <div className={classes.column}>
                    Release Date:
                    <span className={classes.releaseDetailsSpan}>
                      {new Date(+releaseDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className={classes.column}>
                    Running Time:
                    <span className={classes.releaseDetailsSpan}>
                      {duration} min
                    </span>
                  </div>
                </div>
                <div className={classes.row}>
                  <div className={classes.column}>
                    Vote Count:
                    <span className={classes.releaseDetailsSpan}>
                      {ratingsQuantity}
                    </span>
                  </div>
                  <div className={classes.column}>
                    Vote Average:
                    <span className={classes.releaseDetailsSpan}>
                      {ratingsAverage} / 5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.tabContainer}>
          <Tabs>
            <TabList>
              <Tab>Actors</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanel>
              <ActorList actors={actors} />
            </TabPanel>
            <TabPanel>
              <ReviewList reviews={reviews} />
              {isAuthenticated ? (
                <ReviewInput movieId={movieId} />
              ) : (
                <h4>Please sign in to add a review!</h4>
              )}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
  return null;
};

export default MovieDetailPage;
