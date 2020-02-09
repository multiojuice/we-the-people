import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ContentSlogan, Slogan} from '../styled/home_content_styles'
import {Main, FlexCol, RoundedSubmitInput, RoundedSubmitTitle, RoundedSubmitButton} from '../styled/base';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Main>
        <ContentSlogan>
          <Slogan>Here to help every step of the way</Slogan>
        </ContentSlogan>
        <FlexCol>
        <RoundedSubmitTitle>Name</RoundedSubmitTitle>
        <RoundedSubmitInput id="username" onChange={this.handleChange}/>
        <RoundedSubmitTitle>Questions/Comments</RoundedSubmitTitle>
        <RoundedSubmitInput id="password" onChange={this.handleChange}/>
        <RoundedSubmitButton onClick={this.signinAction}>Send</RoundedSubmitButton>
      </FlexCol>
      </Main>
    );
  }
}

Contact.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default Contact;
