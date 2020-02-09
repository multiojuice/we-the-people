/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
//import {connect} from 'react-redux';

import NavBar from './containers/NavBar'
import Footer from './containers/Footer'
import HomePage from "./containers/HomePage";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Register from './containers/Register';
import RegisterMock from "./containers/RegisterMock";
import SignIn from "./containers/SignIn";
import SignOut from "./containers/SignOut";
import NotFoundPage from "./NotFoundPage";
import {AppWrapper} from './styled/base';

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <AppWrapper>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/registerMock" component={RegisterMock}/>
            <Route exact path="/signout" component={SignOut}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route component={NotFoundPage} />
          </Switch>
          <Footer></Footer>
        </AppWrapper>
      </ParallaxProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
