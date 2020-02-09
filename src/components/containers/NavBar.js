import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {NavStyled, NavLinksStyled, Title, NavLinkStyled} from '../styled/nav_styles'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "We The People"
    }
  }

  render() {
    return (
      <NavStyled>
        <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
            <Title>{this.state.title}</Title>
        </Link>
        <NavLinksStyled>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black'}}>
                <NavLinkStyled>
                    About
                </NavLinkStyled>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                <NavLinkStyled>
                    Contact
                </NavLinkStyled>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                <NavLinkStyled>
                    Register
                </NavLinkStyled>
            </Link>       
            { !this.props.signedIn ?
             <Link to="/signin" style={{ textDecoration: 'none', color: 'black' }}>
                <NavLinkStyled>
                    Sign In
                </NavLinkStyled>
            </Link> : 
            <Link to="/signout" style={{ textDecoration: 'none', color: 'black' }}>
                <NavLinkStyled>
                    Sign Out
                </NavLinkStyled>
            </Link>
            } 
        </NavLinksStyled>
      </NavStyled>
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