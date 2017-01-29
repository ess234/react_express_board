import { combineReducers } from 'redux';
import board from './boardReducer';

//컴바인된 reducer들 중에 actionType이 일치하는 Reducer를 찾는다.
const rootReducer = combineReducers({
  contents: board
});

export default rootReducer;
