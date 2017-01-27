import {LOAD_BOARD_CLEAR} from './actionTypes';
import boardApi from '../api/boardApi';

export function loadBoard() {
  return (dispatch) => {
    return boardApi.getAllContents().then (contents => dispatch({type: LOAD_BOARD_CLEAR, contents})).catch(error => {
      throw(error);
    });
  }
};
