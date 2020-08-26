import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import classes from './HomePage.module.scss';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  return (
    <>
      <section className={classes.homepage}>
        <Navbar />
        <Hero />
      </section>
      <div className={classes.movieListContainer}>
        <h3>Top movie Now-playing</h3>
        <MovieList />
      </div>
    </>
  );
};

export default HomePage;
