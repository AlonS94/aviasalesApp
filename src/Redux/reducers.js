import { combineReducers } from 'redux';
import ticketsReducer from './tickets/reducers';
import searchIdReducer from './searchId-for-API/reducers';
import filtersdReducer from './filter/reducers';
import sortingReducer from './sorting/reducers';
import loadingdReducer from './loading-indicator/reducers';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  searchId: searchIdReducer,
  filters: filtersdReducer,
  sorting: sortingReducer,
  loading: loadingdReducer,
});

export default rootReducer;
