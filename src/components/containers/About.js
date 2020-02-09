import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Main} from '../styled/base'
import {ContentSlogan, Slogan} from '../styled/home_content_styles'
//import AboutStyled from '../styled/about_styles'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Main>
        <ContentSlogan>
          <Slogan>
            An organization dedicated <br/>to improving the lives of those less fortunate.
          </Slogan>
        </ContentSlogan>
        {/* <AboutStyled>
          Hello, <br/> Our organization&apos;s goal is to connect lower education students with those in high education. We help to broaden the horizons of 
          younger children in order to help them find their passion.
        </AboutStyled> */}
      </Main>
    );
  }
}

About.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default About;
