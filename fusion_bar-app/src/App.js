import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import Random from './components/Random'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-links">
            <li className='item'>
              <Link className='Nav-links' to="/">Home</Link>
            </li>
            <li className='item'>
              <Link className='Nav-links' to="/search">Search</Link>
            </li>
            <li className='item'>
              <Link className='Nav-links' to="/random">Random</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/search' component={Search} />
            <Route path='/random' component={Random} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App