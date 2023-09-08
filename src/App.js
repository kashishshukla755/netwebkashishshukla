// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductSearch from './component/ProductSearch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products/:q?" component={ProductSearch} />
      </Switch>
    </Router>
  );
}

export default App;
