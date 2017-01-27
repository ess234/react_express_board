import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

//process.env실제 환경에서는 환경이 dev인지 prod인지 체크 후 환경에 따라 store 호출
//배포환경에서 불필요한 middleware까지 호출한다면 느려지기 때문에

//thunk middleware는 actions 폴더에 있는 index.js에서 asyncronism dispatch를 가능하게 해줌
/* store */
function configStore(initialState) {
  return  createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default configStore;
