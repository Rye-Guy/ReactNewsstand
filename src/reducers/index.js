import { combineReducers } from 'redux';
import PubsReducer from './reducer_pubs';
console.log(PubsReducer)
const rootReducer = combineReducers({
  pubs: PubsReducer,
});

export default rootReducer;
