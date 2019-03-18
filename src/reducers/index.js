import { combineReducers } from 'redux';
import PubsReducer from './reducer_pubs';

const rootReducer = combineReducers({
  pubs: PubsReducer
});

export default rootReducer;
