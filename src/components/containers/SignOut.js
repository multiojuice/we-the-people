import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions/signInActions'
import { FlexCol, RoundedSubmitButton } from '../styled/base';

class SignOut extends Component {
  signOut = () => {
    this.props.actions.signOut();
  }

  render() {
    if(!this.props.loginInformation.signedIn) {
      this.props.history.push('/');
    }

    return (
      <FlexCol>
        <RoundedSubmitButton onClick={this.signOut} >Sign Out</RoundedSubmitButton>
      </FlexCol>
    );
  }
}

SignOut.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  loginInformation : PropTypes.shape({
    signedIn: PropTypes.bool
  }),
  actions: PropTypes.shape({
    signOut: PropTypes.func
  })
};

function mapStateToProps(state) {
  return {
    loginInformation: state.loginInformation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOut);