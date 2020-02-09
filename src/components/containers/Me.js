import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';
import School from './School';

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
      console.warn(this.props)

    switch(this.props.loginInformation.type) {
        case 'U':
            return <div></div>;
        case 'S':
            return <School />;
        case 'M':
            return <div></div>;
    }
    return null;
  }
}

Me.propTypes = {
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
)(Me);