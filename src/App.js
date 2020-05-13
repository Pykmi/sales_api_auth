import React from 'react';
import Request from './Request';
import Response from './Response';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/request" component={Request} />
        <Route path="/response" component={Response} />
      </Switch>
    </Router>
);

export default App;
