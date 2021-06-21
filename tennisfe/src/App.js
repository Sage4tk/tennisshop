import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Nav from './components/Nav';
import Home from './components/Home';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
