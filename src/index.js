import React, { Component, Fragment } from 'react';
import {render} from 'react-dom';
import App from './App';
import TeamForm from './TeamForm'
import SingleForm from './SingleForm'
import Confirm from './Confirm'
import {Route, Link, HashRouter as Router} from 'react-router-dom'

const routing = (
    <Router basename="/">
      <div>
        <Route exact path="/" component={App} />
        <Route path="/single" component={SingleForm} />
        <Route path="/team" component={TeamForm} />
        <Route path="/confirm" component={Confirm} />
      </div>
    </Router>
)

render(routing, document.getElementById("root"))