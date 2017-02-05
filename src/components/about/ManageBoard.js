import React from 'react';
import {Link} from 'react-router';
import BoardForm from './BoardForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boardActions from '../../actions/boardActions';

class ManageBoard extends React.Component{
//생성자에 props.contents를 호출해서 Object.assign울 통해 값이 변하지 않은 객체를 state 초기값으로 설정한다.
  constructor(props, context){
    super(props, context);

    this.state = {
      //Object.assign() 메소드는 열거할 수 있는 하나 이상의 소스 오브젝트로 부터 타켓 오브젝트로 프로퍼티들을 복사하는데 사용.
      contents: Object.assign({}, this.props.contents),
      formTitle: this.props.formTitle
    };

    // this.updateChangeState = this.updateChangeState.bind(this);
    // this.callwrite = this.callwrite.bind(this);
  }

//onChange에서 사용할 updateChangeState 함수 구현 -> 값이 변경될때마다 state 값 변경
updateChangeState(event) {
  const field = event.target.name;
  let contents = this.state.contents;

  contents[field] = event.target.value;

  return this.setState({contents: contents});
}

callModify() {
  this.setState({formTitle:'update'});
}

callUpdate(event) {
  //이벤트를 취소할 수 있는 경우 이벤트의 전파를 막지 않고 이벤트를 취소함
  event.preventDefault();

//updateBoard 액션 수행 -> 수정후 about 페이지로 이동
  this.props.actions.updateBoard(this.state.contents)
  .then(() => this.redirect())
  .catch(error => {
    console.log(error);
  })
}

//save버튼이 눌렸을때 사용할 callwrite 함수 구현
callWrite(event) {
  //이벤트를 취소할 수 있는 경우 이벤트의 전파를 막지 않고 이벤트를 취소함
  event.preventDefault();

//writeBoard 액션 수행 -> 추가후 about 페이지로 이동
  this.props.actions.writeBoard(this.state.contents)
  .then(() => this.redirect())
  .catch(error => {
    console.log(error);
  })
  // console.log(this.state.contents);
}

redirect() {
  // toastr.options.positionClass = 'toast-bottom-right';
  // toastr.success('content saved');
  this.context.router.push('/board');
}

  render(){
    let formTitle = this.state.formTitle,
        contentResult = this.props.contents,
        changeState = this.updateChangeState.bind(this),
        onClickTypes = '',
        buttonName = '',
        isEnabled = false;

    switch (formTitle) {
      case 'content':
          buttonName='Modify',
          onClickTypes=this.callModify.bind(this),
          isEnabled=true;
        break;
      case 'write':
          buttonName='Save',
          onClickTypes=this.callWrite.bind(this)
        break;
      case 'update':
          buttonName='Update',
          onClickTypes=this.callUpdate.bind(this)
        break;
      default: buttonName='unKnown';
        break;
    }

    //dumb 컴포넌트로 내려줄 props를 정의한다.
    return (
      <div id="wrapper">
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
          </div>
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
              <h2>시리얼 라이센스 등록</h2>              
          </div>
          <div class="col-lg-2">
          </div>
        </div>
        <BoardForm
          onChange={changeState}
          onSave={onClickTypes}
          isEnabled={isEnabled}
          readContent={contentResult}
          formTitle={formTitle}
          buttonName={buttonName}
        ></BoardForm>
      </div>
    </div>
    );
  }
}

//!! context는 상위 컴포넌트에서 하위 컴포넌트로 바로 데이터를 전달하는 역할을 함
//react-router에서 history를 조작하는 방법으로 사용함 (뒤로가기, 앞으로가기, 페이지 이동)
//this.context.router를 호출하기 위해서 정의가 필요함.
ManageBoard.contextTypes = {
  router: React.PropTypes.object.isRequired
}

ManageBoard.propTypes = {
  contents: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  formTitle: React.PropTypes.string.isRequired
}

//클래스 내부에서 호출할 props.contents에 초기 객체를 설정해준다.
function mapStateToProps(state, ownProps){
  let initContent = {},
      formTitle = '',
      paramId = ownProps.params.id;

  if (paramId){
      formTitle ='content';
      initContent = state.contents.filter((content) => content.id === paramId)[0];
  }
  else {
    formTitle = 'write',
    initContent = {
      id:'',
      title:'',
      content:'',
      author:'',
      date:''
    }
  }


  return {
    contents: initContent,
    formTitle: formTitle
  }
}

function mapDispatchToProps(dispatch){
  return {
      actions: bindActionCreators(boardActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageBoard);
