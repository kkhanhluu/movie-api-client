import React from 'react';

import classes from './Actor.module.scss';

const Actor = (props) => {
  return (
    <div className={classes.actor}>
      <img
        className={classes.iconContainer}
        src={require(`../../../assets/user-${Math.floor(
          Math.random() * 10 + 2
        )}.jpg`)}
        alt='Actor'
      />

      <h3>{props.actor}</h3>
    </div>
  );
};

export default Actor;
