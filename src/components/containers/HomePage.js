import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 style={{"color": "white"}}>We the people</h1>

        <h2>Get it started!</h2>
        <ol>
        </ol>
      </div>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default connect(
  {},
  {}
)(HomePage);
