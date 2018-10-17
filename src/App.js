
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const hello = () => ('hello')
const store = createStore(hello)

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="logo_link">
            <div className="logo">
              <h1>NET</h1>
              <h1>MOVIES</h1>
            </div>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default App;

