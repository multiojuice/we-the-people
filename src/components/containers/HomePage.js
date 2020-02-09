import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';

import {Main} from '../styled/base'
import {ContentSlogan, Slogan, ContentNotes, Note, NoteTitle, NoteInfo, ContentBottom} from '../styled/home_content_styles'

class HomePage extends Component {
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
            Empowering universities <br/>to better their communities through education.
          </Slogan>
        </ContentSlogan>
        <ContentNotes>
          <Parallax y={[10, -40]}>
            <Note color='#ffb6b9'>
              <NoteTitle>College Students</NoteTitle>
              <NoteInfo>Enabling college students to give back to their community and offering real world experience with helping others. Filling not only community service requirements, but also the desire to help.</NoteInfo>
            </Note>
          </Parallax>
          <Parallax y={[-5, 5]}>
            <Note color='#fae3d9'>
              <NoteTitle>Primary Students</NoteTitle>
              <NoteInfo>Helping broaden the horizons of students at an early age and allowing them to find their passion early in life. We strive to inform accurately, effectively, and joyously.</NoteInfo>
            </Note>
          </Parallax>
          <Parallax y={[-10, 20]}>
            <Note color='#bbded6'>
              <NoteTitle>Institutions</NoteTitle>
              <NoteInfo>Helping universities give back to their local schools in order to better the education of entire communities. While also strengthening institutional relations between universities and local schools.</NoteInfo>
            </Note>
          </Parallax>
        </ContentNotes>
        <ContentBottom></ContentBottom>
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
