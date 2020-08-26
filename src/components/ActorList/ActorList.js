import React from 'react';

import Actor from './Actor/Actor';
import classes from './ActorList.module.scss';

const ActorList = (props) => {
  return (
    <div className={classes.actorList}>
      {props.actors.map((actor) => (
        <Actor key={actor} actor={actor} />
      ))}
    </div>
  );
};

export default ActorList;
