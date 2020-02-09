import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/signInActions';
import {ContentSlogan, Slogan} from '../styled/home_content_styles'
import {Main, FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';


class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
      this.props.actions.toggleEventFinished();
  }

  registerUniversityAction = () => {
    const {tags, name, description} = this.state;
    this.props.actions.createEvent(this.props.loginInformation.id, tags, name, description);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    console.warn(this.state)
    console.warn(this.props)
    if(this.props.events.completedEventCreate) {
      this.props.history.push('/me');
    }

    return (
        <Main>
            <ContentSlogan>
                <Slogan>Tell us a bit about your event!</Slogan>
            </ContentSlogan>
            <FlexCol>
                <RoundedSubmitTitle>Name</RoundedSubmitTitle>
                <RoundedSubmitInput id="name" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Description</RoundedSubmitTitle>
                <RoundedSubmitInput id="description" onChange={this.handleChange}/>
                <RoundedSubmitTitle>Add a list of related interests (Comma Seperated)!</RoundedSubmitTitle>
                <RoundedSubmitInput id="tags" onChange={this.handleChange}/>
                <RoundedSubmitButton onClick={this.registerUniversityAction}>Register</RoundedSubmitButton>
            </FlexCol>
        </Main>
    );
  }
}

CreateEvent.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  actions: PropTypes.shape({
    createEvent: PropTypes.func
  }),
  loginInformation : PropTypes.shape({
    signedIn: PropTypes.bool
  })
};

function mapStateToProps(state) {
  return {
    loginInformation: state.loginInformation,
    events: state.events
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
)(CreateEvent);