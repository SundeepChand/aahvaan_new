import React from 'react';
import {render} from 'react-dom';
import App from './App';
import TeamForm from './components/TeamForm'
import SingleForm from './components/SingleForm'
import Confirm from './components/Confirm'
import TokenDisplay from './components/TokenDisplay'
import MeetCouncil from './components/MeetCouncil'
import {Route, HashRouter as Router} from 'react-router-dom'

const routing = (
    <Router basename="/">
      <div>
        <Route exact path="/" component={App} />
        <Route path="/single" component={SingleForm} />
        <Route path="/team" component={TeamForm} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/success" component={TokenDisplay} />
        <Route path="/council" component={MeetCouncil} />
      </div>
    </Router>
)

render(routing, document.getElementById("root"))