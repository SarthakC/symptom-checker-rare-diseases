import { GET_RESULT, ADD_QUERY } from '../actions/types';

const initialState = { data: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case ADD_QUERY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
