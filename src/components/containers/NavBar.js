import React, {Component} from 'react';
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
             <Link to="/signin" style={{ textDecoration: 'none', color: 'black' }}>
                <NavLinkStyled>
                    Sign In
                </NavLinkStyled>
            </Link>
        </NavLinksStyled>
      </NavStyled>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default NavBar;