import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar'
import {Main} from '../styled/base'
import {ContentSlogan, Slogan} from '../styled/home_content_styles'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Main>
        <NavBar></NavBar>
        <ContentSlogan>
          <Slogan>
            Empowering universities to lift their communities through education.
          </Slogan>
        </ContentSlogan>
      </Main>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default HomePage;
