/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import valueDispatch from '../Redux/actions';
import HeaderLogo from '../Header-logo';
import './App.scss';
import Main from '../Main';
import DataAPI from '../../data-API';

const App = ({ searchId, getFlights, returnID, startLoading, endLoading }) => {
  const API = new DataAPI();

  const createSearchId = () => {
    if (searchId) return;
    API.getSearchId().then((id) => {
      returnID(id);
    });
  };

  const getTickets = () => {
    if (searchId) {
      startLoading();
      API.getTickets(searchId).then((respons) => {
        const newTickets = respons.tickets.filter((elem, index) => index <= 4);
        getFlights(newTickets);
        endLoading();
        if (!respons.stop) {
          getTickets();
          endLoading();
        }
      });
    }
  };
  useEffect(() => {
    createSearchId();
  }, []);

  useEffect(() => {
    getTickets();
  }, [searchId]);

  return (
    <>
      <HeaderLogo />
      <Main />
    </>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.tickets,
  searchId: state.searchId,
  loading: state.loading,
});

App.propTypes = {
  searchId: PropTypes.string,
  getFlights: PropTypes.func,
  returnID: PropTypes.func,
  startLoading: PropTypes.func,
  endLoading: PropTypes.func,
};

App.defaultProps = {
  searchId: '',
  getFlights: () => {},
  returnID: () => {},
  startLoading: () => {},
  endLoading: () => {},
};

export default connect(mapStateToProps, valueDispatch)(App);
