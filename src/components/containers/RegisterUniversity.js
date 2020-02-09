import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {ContentSlogan, Slogan} from '../styled/home_content_styles'
import {Main, FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';


class RegisterMock extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  registerMockAction = () => {
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

    return (
        <Main>
            <ContentSlogan>
                <Slogan>Tell us a bit about yourself!</Slogan>
            </ContentSlogan>
            <FlexCol>
                <RoundedSubmitTitle>Name</RoundedSubmitTitle>
                <RoundedSubmitInput id="name" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Address</RoundedSubmitTitle>
                <RoundedSubmitInput id="address" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Description</RoundedSubmitTitle>
                <RoundedSubmitInput id="description" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Level</RoundedSubmitTitle>
                <RoundedSubmitInput id="level" onChange={this.handleChange}/>
                <RoundedSubmitButton onClick={this.signinAction}>Register</RoundedSubmitButton>
            </FlexCol>
        </Main>
    );
  }
}

RegisterMock.propTypes = {
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
)(RegisterMock);