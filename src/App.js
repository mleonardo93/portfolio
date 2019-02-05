import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "Maia Leonardo"
  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>

          <div className="navbar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>          
        </div>
      </Router>

    </div>
    );
  }
}

export default App;
