import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {ContentSlogan, Slogan} from '../styled/home_content_styles'
import {Main, FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';


class RegisterUniversity extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  registerUniversityAction = () => {
    const {username, password, name, zipcode, description, photoURL} = this.state;
    this.props.actions.createUniversity(username, password, name, zipcode, description, photoURL);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {

    if(this.props.loginInformation.signedIn) {
      this.props.history.push('/');
    }

    return (
        <Main>
            <ContentSlogan>
                <Slogan>Tell us a bit about your university!</Slogan>
            </ContentSlogan>
            <FlexCol>
                <RoundedSubmitTitle>Username</RoundedSubmitTitle>
                <RoundedSubmitInput id="username" onChange={this.handleChange}/>
                <RoundedSubmitTitle>password</RoundedSubmitTitle>
                <RoundedSubmitInput id="password" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Name</RoundedSubmitTitle>
                <RoundedSubmitInput id="name" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Zipcode</RoundedSubmitTitle>
                <RoundedSubmitInput id="zipcode" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Description</RoundedSubmitTitle>
                <RoundedSubmitInput id="description" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Profile Picture</RoundedSubmitTitle>
                <RoundedSubmitInput id="photoURL" onChange={this.handleChange}/>
                <RoundedSubmitButton onClick={this.registerUniversityAction}>Register</RoundedSubmitButton>
            </FlexCol>
        </Main>
    );
  }
}

RegisterUniversity.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  actions: PropTypes.shape({
    createUniversity: PropTypes.func
  }),
  loginInformation : PropTypes.shape({
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
)(RegisterUniversity);