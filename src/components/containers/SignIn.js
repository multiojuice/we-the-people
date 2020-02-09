import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlexCol} from '../styled/base';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <FlexCol>
        
      </FlexCol>
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
