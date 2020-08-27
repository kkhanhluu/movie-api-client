import * as React from 'react';

const classes = require('./InputError.module.scss');

const InputError = (props) => {
  const errorClass = [classes.errorContainer];
  if (props.visible) {
    errorClass.push(classes.visible);
  } else {
    errorClass.push(classes.invisible);
  }

  return (
    <div className={errorClass.join(' ')}>
      <span>{props.errorMessage}</span>
    </div>
  );
};

export default InputError;
