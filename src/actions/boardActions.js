import {LOAD_BOARD_CLEAR} from './actionTypes';
import boardApi from '../api/boardApi';

//문제가 없는 함 actiontype인 LOAD_BOARD_CLEAR와 prevState인 contents를 반환해서 reducer에게 전달
export function loadBoard() {
  return (dispatch) => {
    return boardApi.getAllContents()
    .then (contents => dispatch({type: LOAD_BOARD_CLEAR, contents}))
    .catch(error => {
      throw(error);
    });
  }
};
