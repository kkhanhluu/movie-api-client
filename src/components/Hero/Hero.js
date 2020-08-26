import React from 'react';
import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <img
          className='header__content-image'
          src='http://www.returndates.com/backgrounds/narcos.logo.png'
          alt='narcos background'
        />
        <h2>Season 2 now available</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.
        </p>
      </div>
    </div>
  );
};

export default Hero;
