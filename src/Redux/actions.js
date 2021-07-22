import getFlights from './tickets/actions';
import returnID from './searchId-for-API/actions';
import filterChange from './filter/actions';
import sortingChange from './sorting/actions';
import { startLoading, endLoading } from './loading-indicator/actions';

const valueDispatch = {
  getFlights,
  returnID,
  filterChange,
  sortingChange,
  startLoading,
  endLoading,
};

export default valueDispatch;
