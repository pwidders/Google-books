import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BookDisplay from './components/book-display.components';
import SavedBooks from './components/saved-books.components';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">GoogleBooks Search</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Search Books</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Saved Books</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={BookDisplay} />
          <Route path="/saved" component={SavedBooks} />
        </div>
      </Router>
    );
  }
}

export default App;
