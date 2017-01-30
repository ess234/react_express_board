import {LOAD_BOARD_CLEAR, CALL_WRITE, UPDATE_BOARD} from './actionTypes';
import boardApi from '../api/boardApi';

//문제가 없는 함 actiontype인 LOAD_BOARD_CLEAR와 prevState인 contents를 반환해서 reducer에게 전달
//Promise 실행
export function loadBoard() {
  return (dispatch) => {
    return boardApi.getAllContents()
    .then (contents => dispatch({type: LOAD_BOARD_CLEAR, contents}))
    .catch(error => {
      throw(error);
    });
  }
};

export function writeBoard(content){
  return (dispatch) => {
    return boardApi.saveContent(content)
    .then(content => dispatch({type: CALL_WRITE, content}))
    .catch(error => {
      throw(error);
    });
  }
};

export function updateBoard(content){
  return (dispatch) => {
    return boardApi.updateContent(content)
    .then(content => dispatch({type: UPDATE_BOARD, content}))
    .catch(error => {
      throw(error);
    });
  }
};
