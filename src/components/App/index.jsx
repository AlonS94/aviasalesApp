/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import valueDispatch from '../Redux/actions';
import HeaderLogo from '../Header-logo';
import './App.scss';
import Main from '../Main';

const App = ({ searchId, getFlights, returnID }) => {
  const getTickets = () => {
    if (searchId) {
      getFlights(searchId);
    }
  };

  useEffect(() => {
    returnID();
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
};

App.defaultProps = {
  searchId: '',
  getFlights: () => {},
  returnID: () => {},
};

export default connect(mapStateToProps, valueDispatch)(App);
