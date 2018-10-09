import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as data from './json/class-data';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="container">
          <header>
            <h1>Intuit Banking</h1>
            <ul className="list-inline">
              {/* None of these have defined routes at the moment! */}
              <li className="list-inline-item"><Link to="/">Home</Link></li>
              <li className="list-inline-item"><Link to="/experiments">Experiments</Link></li>
              <li className="list-inline-item"><Link to="/categories">Categories</Link></li>
              <li className="list-inline-item"><Link to="/payees">Payees</Link></li>
            </ul>
            <hr />
          </header>
        </main>
      </Router>

    );
  }
}

export default App;
