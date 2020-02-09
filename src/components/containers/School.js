import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/schoolActions';
import {FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';
import { Slogan } from '../styled/home_content_styles';

class School extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getSchool = () => {
    this.props.actions.getSchool(this.props.loginInformation.id);
  }

  componentDidMount = () => {
      if (!this.props.schools[this.props.loginInformation.id]) {
        this.getSchool()
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    console.warn(this.props);

    if(!this.props.schools || !this.props.schools[this.props.loginInformation.id]) {
        return <Slogan>Loading...</Slogan>;
    }
    return <div>got it</div>
  }
}

School.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  actions: PropTypes.shape({
    getSchool: PropTypes.func
  }),
  loginInformation: PropTypes.shape({
    signedIn: PropTypes.bool,
    id: PropTypes.string
  }),
  schools: PropTypes.shape({
      id: PropTypes.any
  })
};

function mapStateToProps(state) {
  return {
    loginInformation: state.loginInformation,
    schools: state.schools
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
)(School);