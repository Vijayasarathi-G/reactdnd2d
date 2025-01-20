import { createStore, combineReducers } from 'redux';
import jobReducer from './reducers/jobReducer';

const rootReducer = combineReducers({
  jobs: jobReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
