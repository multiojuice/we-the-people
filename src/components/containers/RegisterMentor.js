import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {ContentSlogan, Slogan} from '../styled/home_content_styles'
import {Main, FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';


class RegisterMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  registerUniversityAction = () => {
    const {username, password, name, universityName, tags} = this.state;
    this.props.actions.createMentor(username, password, name, universityName, tags);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    console.warn(this.state)
    console.warn(this.props)

    if(this.props.loginInformation.signedIn) {
      this.props.history.push('/');
    }

    return (
        <Main>
            <ContentSlogan>
                <Slogan>Tell us a bit about yourself!</Slogan>
            </ContentSlogan>
            <FlexCol>
                <RoundedSubmitTitle>Username</RoundedSubmitTitle>
                <RoundedSubmitInput id="username" onChange={this.handleChange}/>
                <RoundedSubmitTitle>password</RoundedSubmitTitle>
                <RoundedSubmitInput id="password" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Name</RoundedSubmitTitle>
                <RoundedSubmitInput id="name" onChange={this.handleChange}/>
                <RoundedSubmitTitle>University Name</RoundedSubmitTitle>
                <RoundedSubmitInput id="universityName" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Add a list of you interests (Comma Seperated)!</RoundedSubmitTitle>
                <RoundedSubmitInput id="tags" onChange={this.handleChange}/>
                <RoundedSubmitButton onClick={this.registerUniversityAction}>Register</RoundedSubmitButton>
            </FlexCol>
        </Main>
    );
  }
}

RegisterMentor.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  actions: PropTypes.shape({
    createMentor: PropTypes.func
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
)(RegisterMentor);