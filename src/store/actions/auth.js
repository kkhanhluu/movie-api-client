import Swal from 'sweetalert2';
import * as actionTypes from './actionTypes';

export const authSuccess = (token) => {
  localStorage.setItem('token', token);
  Swal.fire('Success!', 'You logged in successfully!', 'success');
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
  };
};

export const authFail = (err) => {
  Swal.fire('Error!', 'Check your username and password!', 'error');
  return {
    type: actionTypes.AUTH_FAIL,
    error: err,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
