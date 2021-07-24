import { bindActionCreators } from 'redux';
import * as actions from '../loading-indicator/actions';
import DataAPI from '../../dataAPI';
import store from '..';

const API = new DataAPI();
const { dispatch } = store;

const { startLoading, endLoading } = bindActionCreators(actions, dispatch);

const getFlights = (searchId) =>
  function restart() {
    startLoading();
    API.getTickets(searchId)
      .then((respons) => {
        const tickets = respons.tickets.slice(0, 5);
        const { stop } = respons;
        dispatch({ type: 'getFlights', tickets });
        endLoading();
        if (!stop) restart(searchId);
      })
      .catch(() => {
        endLoading();
        restart();
      });
  };

export default getFlights;
