/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage';
import HomePage from 'containers/HomePage';
import SignUpPage from 'containers/SignUpPage';
import LoginPage from 'containers/LoginPage';
import Header from 'containers/Header';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
