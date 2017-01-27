import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boardActions from '../../actions/boardActions';

class About extends React.Component {
  constructor (props, context) {
    super (props, context);
  }

  render() {
    const contents = this.props.contents;

    return (
      <div>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contents.map(content =>
              <tr key={content.id}>
                <td>{content.id}</td>
                <td>{content.title}</td>
                <td>{content.author}</td>
                <td>{content.date}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

About.propTypes = {
  contents: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
}

//state를 prop 매핑
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

//연결
export default connect(mapStateToProps, mapDispatchToProps)(About);
