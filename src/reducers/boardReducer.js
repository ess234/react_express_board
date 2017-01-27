import { LOAD_BOARD_CLEAR } from '../actions/actionTypes';
import initState from './initState';

const boardReducers = (state = initState.contents, action) => {
  switch (action.type) {
    case LOAD_BOARD_CLEAR:
      return action.contents;
    default:
      return state;
  }

};

export default boardReducers;
