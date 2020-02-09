import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  signinAction = () => {
    this.props.actions.signIn(this.state.username, this.state.password);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    // console.warn(this.state)
    // console.warn(this.props)
    if(this.props.loginInformation.signedIn) {
      this.props.history.push('/');
    }

    return (
      <FlexCol>
        <RoundedSubmitTitle>Username</RoundedSubmitTitle>
        <RoundedSubmitInput id="username" onChange={this.handleChange}/>
        <RoundedSubmitTitle>Password</RoundedSubmitTitle>
        <RoundedSubmitInput id="password" onChange={this.handleChange}/>
        <RoundedSubmitButton onClick={this.signinAction}>Sign in</RoundedSubmitButton>
      </FlexCol>
    );
  }
}

SignIn.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  actions: PropTypes.shape({
    signIn: PropTypes.func
  }),
  loginInformation: PropTypes.shape({
    signedIn: PropTypes.bool
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
)(SignIn);