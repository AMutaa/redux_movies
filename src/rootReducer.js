import {
  combineReducers
} from 'redux';
import { toggle } from './Components/toggle'
import { movies } from './Components/movies'

const rootReducer = combineReducers({
  toggle,
  movies,
});

export default rootReducer;