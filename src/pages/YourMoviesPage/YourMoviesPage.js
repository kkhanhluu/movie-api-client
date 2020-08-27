import React from 'react';
import { useQuery } from '@apollo/client';

import Navbar from '../../components/Navbar/Navbar';
import YourMoviesList from '../../components/YourMoviesList/YourMoviesList';
import classes from './YourMoviesPage.module.scss';
import { GET_CURRENT_USER } from '../../queries';

const YourMoviesPage = () => {
  const currentUserData = useQuery(GET_CURRENT_USER).data;
  if (currentUserData && currentUserData.currentUser) {
    return (
      <div className={classes.yourMoviesPage}>
        <Navbar />
        <YourMoviesList userId={currentUserData.currentUser.id} />
      </div>
    );
  }
  return null;
};

export default YourMoviesPage;
