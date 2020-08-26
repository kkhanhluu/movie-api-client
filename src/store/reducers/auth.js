import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return { ...state, token: action.token, error: null };
    case actionTypes.AUTH_FAIL:
      return { ...state, token: null, error: action.error };
    case actionTypes.AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
