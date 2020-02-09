import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';

class CreateAccount extends Component {
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
    console.warn(this.state)
    console.warn(this.props)

    return (
      <FlexCol>
        <RoundedSubmitTitle>Username</RoundedSubmitTitle>
        <RoundedSubmitInput id="username" onChange={this.handleChange}/>
        <RoundedSubmitTitle>Password</RoundedSubmitTitle>
        <RoundedSubmitInput id="password" onChange={this.handleChange}/>
        <RoundedSubmitTitle>name</RoundedSubmitTitle>
        <RoundedSubmitInput id="name" onChange={this.handleChange}/>
        <RoundedSubmitTitle>description</RoundedSubmitTitle>
        <RoundedSubmitInput id="description" onChange={this.handleChange}/>
        <RoundedSubmitTitle>Photo URL</RoundedSubmitTitle>
        <RoundedSubmitInput id="photoURL" onChange={this.handleChange}/>
        <RoundedSubmitTitle>Zipcode</RoundedSubmitTitle>
        <RoundedSubmitInput id="zipcode" onChange={this.handleChange}/>
        <RoundedSubmitTitle>Adress</RoundedSubmitTitle>
        <RoundedSubmitInput id="Address" onChange={this.handleChange}/>
        <RoundedSubmitButton onClick={this.createAccountAction}>Sign in</RoundedSubmitButton>
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