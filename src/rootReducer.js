import {
  combineReducers
} from 'redux';
import message from './reducer';

const rootReducer = combineReducers({
  message: message
});

export default rootReducer;