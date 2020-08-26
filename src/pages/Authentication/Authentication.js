import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import Navbar from '../../components/Navbar/Navbar';
import classes from './Authentication.module.scss';
import { LOGIN, REGISTER } from '../../queries';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';

const Authentication = (props) => {
  const dispatch = useDispatch();

  // login or register
  const mode = props.match.params.mode;

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      dispatch(actions.authSuccess(login.token));
      props.history.push('/');
    },
    onError(error) {
      dispatch(actions.authFail(error));
    },
  });

  const [register, { loadingRegister, errorRegister }] = useMutation(REGISTER, {
    onCompleted() {
      if (errorRegister) {
        alert('Error! Try again later');
        return;
      }
      alert('You have registered successfully');
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = useCallback(() => {
    if (mode === 'login') {
      login({ variables: { username: email, password } });
    } else if (mode === 'register') {
      register({ variables: { username: email, password } });
    }
  }, [email, password, mode]);

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.login}>
        <div className={classes.banner}></div>
        <form>
          <div className={classes.wrapper}>
            <div className={classes.row}>
              <div className={classes.label}>Username</div>
              <input
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.row}>
              <div className={classes.label}>Password</div>
              <input
                type='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes.row}>
              <button type='button' onClick={() => submit()}>
                {mode === 'login' ? 'Login' : 'Register'}
              </button>
            </div>
          </div>
          {mode === 'login' ? (
            <div className={classes.signup}>
              Don't have an account?{' '}
              <Link to='/authentication/register'>Register</Link>
            </div>
          ) : (
            <div className={classes.signup}>
              Already have account?{' '}
              <Link to='/authentication/login'>Login</Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Authentication;
