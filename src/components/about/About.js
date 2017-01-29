import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boardActions from '../../actions/boardActions';
import BoardList from './BoardList';


class About extends React.Component {
  constructor (props, context) {
    super (props, context);
  }

  render() {
    //mapStateToProps를 통해 State를 props로 매핑되었기 때문에 props로 contents를 호출할 수 있다.
    const contents = this.props.contents;

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
