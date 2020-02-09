import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <NavBar></NavBar>
    );
  }
}

SignIn.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default SignIn;
