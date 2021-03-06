import { LOAD_BOARD_CLEAR, CALL_WRITE, UPDATE_BOARD } from '../actions/actionTypes';
import initState from './initState';

//action Type이 LOAD_BOARD_CLEAR인 Reducer를 boardReducers에서 찾는다.
//더미 데이터를 조작하기 않기 때문에 prevState를 그대로 받아서 store(newstate)에 넘겨준다.
const boardReducers = (state = initState.contents, action) => {
  switch (action.type) {
    case LOAD_BOARD_CLEAR:
      return action.contents;
    case CALL_WRITE:
      return [
        ...state,
        Object.assign({}, action.content)
      ];
    case UPDATE_BOARD:
        return [
          ...state.filter(content => content.id !== action.content.id),
          Object.assign({}, action.content)
        ].sort((a,b) => a.id > b.id);
    default:
      return state;
  }

};

export default boardReducers;
