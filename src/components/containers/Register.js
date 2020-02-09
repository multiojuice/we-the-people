import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {Link} from 'react-router-dom'
import {Main} from '../styled/base'
import {ContentSlogan, Slogan} from '../styled/home_content_styles'
import {RegisterOption, RegisterOptionsContainer} from '../styled/register_styles'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  registerAction = () => {
    this.props.actions.signIn(this.state.username, this.state.password);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  changePage = (event) => {
    this.props.history.push(`/register${event.target.id}`);
  }

  render() {
    // console.warn(this.state)
    // console.warn(this.props)

    return (
        <Main>
            <ContentSlogan>
                <Slogan>Which are you?</Slogan>
            </ContentSlogan>
                <RegisterOptionsContainer>
                    <RegisterOption id="University" onClick={this.changePage}>
                        <h2>University</h2>
                    </RegisterOption>
                    <RegisterOption id="School" onClick={this.changePage}>
                        <h2>School</h2>
                    </RegisterOption>
                    <RegisterOption id="Mentor" onClick={this.changePage}>
                        <h2>Mentor</h2>
                    </RegisterOption>
                </RegisterOptionsContainer>
        </Main>
    );
  }
}

Register.propTypes = {
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
)(Register);