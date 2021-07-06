import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style.scss'

//components
import Home from './components/Home';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={() => (<Home />)} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
