import { combineReducers } from 'redux';
import board from './boardReducer';

//컴바인된 reducer들 중에 actionType이 일치하는 Reducer를 찾는다.
const rootReducer = combineReducers({
  //키값을 정해주지 않으면, reducer명인 board로 newstate를 갖게 됨
  contents: board
});

export default rootReducer;
