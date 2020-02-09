import React, {Component} from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div></div>
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
