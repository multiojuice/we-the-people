import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/mentorActions';
import * as eventsActions from '../../actions/eventsActions';

import {FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton, FlexColFull} from '../styled/base';
import { Slogan } from '../styled/home_content_styles';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getMentor = () => {
    this.props.actions.getMentor(this.props.loginInformation.id);
  }

  getEvent = (id) => {
    this.props.eventsActions.getEvent(id)
  }

  componentDidMount = () => {
      if (!this.props.mentors[this.props.loginInformation.id]) {
        this.getMentor();
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  renderEvents = () => {
    return this.props.mentors[this.props.loginInformation.id].events.map(element => {
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

    if(!this.props.mentors || !this.props.mentors[id]) {
        return <Slogan>Loading...</Slogan>;
    }
    return (
      <FlexColFull>
        <Slogan>{this.props.mentors[id].name}</Slogan>
        
    <div>Interests: </div>
    <div style={{width: "60%", textAlign: "center", margin: "30px"}}>{this.props.mentors[id].tags.map(elm => <div key={elm}>{elm}</div>)}</div>
    <h3>Assigned Events:</h3>
    {this.renderEvents()}
      </FlexColFull>
    )
  }
}

Mentor.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  actions: PropTypes.shape({
    getMentor: PropTypes.func
  }),
  loginInformation: PropTypes.shape({
    signedIn: PropTypes.bool,
    id: PropTypes.string
  }),
  mentors: PropTypes.shape({
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
    mentors: state.mentors,
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
)(Mentor);