import React from 'react';
import Icon from '../Icon/Icon';
import InputError from '../InputError/InputError';

const classes = require('./InputForm.module.scss');

const Input = (props) => {
  const [valid, setValid] = React.useState(true);
  const [empty, setEmpty] = React.useState(true);
  const [focus, setFocus] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [value, setValue] = React.useState(props.value);
  const textarea = React.useRef(null);

  React.useEffect(() => {
    if (textarea && textarea.current) {
      textarea.current.focus();
    }
  }, [textarea]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setEmpty(false);

    checkEmpty(event.target.value);

    // call onChange method on the parent component for updating it's state
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const handleFocus = () => {
    setFocus(true);

    // hide error when validator is active
    if (props.validator) {
      setErrorVisible(false);
    }
  };

  const handleBlur = () => {
    setFocus(false);
    setErrorVisible(!valid);
  };

  const mouseEnterError = () => {
    setErrorVisible(true);
  };

  // validator function
  const checkEmpty = (value) => {
    setValid(value.trim() !== '');
  };

  const inputGroupClasses = [classes.inputGroup];
  if (valid) {
    inputGroupClasses.push(classes.inputValid);
  } else {
    inputGroupClasses.push(classes.inputError);
  }

  if (empty) {
    inputGroupClasses.push(classes.inputEmpty);
  } else {
    inputGroupClasses.push(classes.inputHasValue);
  }

  if (focus) {
    inputGroupClasses.push(classes.inputFocused);
  } else {
    inputGroupClasses.push(classes.inputUnfocused);
  }

  let inputElement = null;
  switch (props.typeInput) {
    case 'input':
      inputElement = (
        <input
          {...props}
          placeholder={props.placeholder}
          className={classes.input}
          id={props.text}
          defaultValue={props.defaultValue}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete='off'
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props}
          placeholder={props.placeholder}
          className={classes.input}
          id={props.text}
          defaultValue={props.defaultValue}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete='off'
          ref={textarea}
          style={{ maxHeight: '400px' }}
        ></textarea>
      );
      break;
    default:
      inputElement = null;
  }

  return (
    <React.Fragment>
      <label className={classes.inputLabel} htmlFor={props.text}>
        <span
          className={classes.labelText}
          style={{ color: 'white', fontSize: '1.6rem' }}
        >
          {props.text}
        </span>
      </label>
      <div className={inputGroupClasses.join(' ')}>
        {inputElement}

        <InputError visible={errorVisible} errorMessage={props.errorMessage} />

        <div className='validationIcons'>
          <i className={classes.inputErrorIcon} onMouseEnter={mouseEnterError}>
            {' '}
            <Icon type='circle_error' />{' '}
          </i>
          <i className={classes.inputValidIcon}>
            {' '}
            <Icon type='circle_tick' />{' '}
          </i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Input;
