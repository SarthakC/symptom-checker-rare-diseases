import axios from 'axios';

import { GET_RESULT, ADD_QUERY } from './types';

export const getQueries = () => async dispatch => {
  try {
    // setLoading();
    const res = await axios.get('/api/queries');
    console.log(res);

    dispatch({
      type: GET_RESULT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addQuery = query => async dispatch => {
  try {
    // setLoading();
    const res = await axios.post('/api/queries/', query);

    dispatch({
      type: ADD_QUERY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
