import React from 'react';
import {connect} from 'react-redux';
//bindActionCreators 메소드를 사용하면 스토어의 dispatch 메소드와 액션 생성자를 바인딩하여
// 액션을 생성한 후 자동으로 디스패처에 전달하는 새로운 액션 생성자를 만들 수 있음
import {bindActionCreators} from 'redux';
import * as boardActions from '../../actions/boardActions';
import BoardList from './BoardList';

//!! context는 상위 컴포넌트에서 하위 컴포넌트로 바로 데이터를 전달하는 역할을 함
//react-router에서 history를 조작하는 방법으로 사용함 (뒤로가기, 앞으로가기, 페이지 이동)
class About extends React.Component {
  constructor (props, context) {
    super (props, context);
  }

  render() {
    //mapStateToProps를 통해 State를 props로 매핑되었기 때문에 props로 contents를 호출할 수 있다.
    const contents = this.props.contents;

    //contens={contents}로 props를 넘기고 있다.
    //boardlist로 넘어온 props는 객체이다.!!
    //content:array[4]
    return (
      <div>

        <BoardList contents={contents}></BoardList>
      </div>
    );
  }
}

About.propTypes = {
  contents: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
}

//state를 prop 매핑 -> store가 가지고 있는 state를 사용하려면 props로 매핑해줘야 된다.
function mapStateToProps(state, ownProps){
  return {
    contents: state.contents
  };
}

//action들 dispatch
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(boardActions, dispatch)
  }
}

//연결 - Redux 스토어에 컴포넌트를 연결해주는 역할을 한다.
//about 컴포넌트는 connect를 통해 redux store와 연결되 있기 때문에 rootReducer에서
//정의한 키값인 contents로 newstate를 호출할 수 있다.
export default connect(mapStateToProps, mapDispatchToProps)(About);
