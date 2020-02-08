/* eslint-disable import/no-named-as-default */
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';

import HomePage from "./containers/HomePage";
import NotFoundPage from "./NotFoundPage";
import {AppWrapper} from './styled/base';

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

const ConnectedApp = connect(
  {}, {})(App);

export default hot(module)(ConnectedApp);
