
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import Toggle from './Toggle';


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(),
)

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
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider >
)

export default App;

