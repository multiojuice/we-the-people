import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/schoolActions';
import * as eventsActions from '../../actions/eventsActions';
import { Link } from 'react-router-dom';


import {FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton, FlexColFull} from '../styled/base';
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

  getEvent = (id) => {
    this.props.eventsActions.getEvent(id)
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

  renderEvents = () => {
    return this.props.schools[this.props.loginInformation.id].events.map(element => {
      if (this.props.events[element]) {
        return <div key={element}>{this.props.events[element].name} - {this.props.events[element].description}</div>
      } else {
        this.getEvent(element);
        return null;
      }
    }
      )
  }

  render() {
    const {id} = this.props.loginInformation;

    if(!this.props.schools || !this.props.schools[id]) {
        return <Slogan>Loading...</Slogan>;
    }

    return (
      <FlexColFull>
        <Link to="/createEvent" style={{color:"black", marginTop: "200px"}}>Create a new Event</Link>
        <Slogan>{this.props.schools[id].name}</Slogan>
        <div style={{width: "60%", textAlign: "center", margin: "30px"}}>{this.props.schools[id].description}</div>
        <img src={this.props.schools[id].photoURL} style={{maxWidth: '40%'}}/>
    <div>Located at: {this.props.schools[id].zipcode}</div>
    <h3>Events:</h3>
    {this.renderEvents()}
      </FlexColFull>
    )
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
  }),
  events: PropTypes.shape({
    id: PropTypes.any
}),
  eventsActions: PropTypes.shape({
    getEvent: PropTypes.func
  })
};

function mapStateToProps(state) {
  return {
    loginInformation: state.loginInformation,
    schools: state.schools,
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    eventsActions: bindActionCreators(eventsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(School);