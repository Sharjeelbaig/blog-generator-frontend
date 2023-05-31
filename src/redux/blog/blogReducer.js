import {  GENERATE_RESPONSE, SET_ERROR } from '../constants';

const initialState = {
  response: null,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_RESPONSE:
      return {
        ...state,
        response: action.data,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        response: {heading:'Error', body:'an error has occured'},
        error: action.data,
      };
    default:
      return state;
  }
};

export default blogReducer;
