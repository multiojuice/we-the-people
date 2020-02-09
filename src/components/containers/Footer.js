import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FooterStyled, FooterItem} from '../styled/footer_styles'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "We The People"
    }
  }

  render() {
    return (
        <FooterStyled>
            <FooterItem>
                Made with Bang
            </FooterItem>
            <FooterItem>
                O2
            </FooterItem>
            <FooterItem>
                Random Shit
            </FooterItem>
        </FooterStyled>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.element,
  signedIn: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

function mapStateToProps(state) {
  return {
    signedIn: state.loginInformation.signedIn
  };
}

export default connect(
  mapStateToProps,
  {}
)(NavBar);