import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import classes from './HomePage.module.scss';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [sortBy, setSortBy] = useState('name');
  const options = [
    'name',
    'release date',
    'duration',
    'ratingsAverage',
    'ratingsQuantity',
  ];
  return (
    <>
      <section className={classes.homepage}>
        <Navbar />
        <Hero />
      </section>
      <div className={classes.movieListContainer}>
        <div className={classes.row}>
          <h3>Top movie Now-playing</h3>
          <div className={classes.sortBy}>
            <h3>Sort by: </h3>
            <Dropdown
              options={options}
              onChange={(e) => setSortBy(e.value)}
              value={sortBy}
              placeholder='Select an option'
            />
          </div>
        </div>

        <MovieList sortBy={sortBy} />
      </div>
    </>
  );
};

export default HomePage;
