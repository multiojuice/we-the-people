import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar'
import {Main} from '../styled/base'
import {Content, Slogan} from '../styled/home_content_styles'

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
        <Content>
          <Slogan>
          &quot;Empowering universities to lift their communities through education.&quot;
          </Slogan>
        </Content>
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
