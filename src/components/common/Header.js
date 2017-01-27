import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render(){
    return (
      <nav>
        <Link to='/main' activeClassName="active">Main</Link>
        {"  /  "}
        <Link to='/about' activeClassName="active">About</Link>
        {this.props.children}
      </nav>
    );
  }
}
