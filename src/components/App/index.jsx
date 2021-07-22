import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import valueDispatch from '../../Redux/actions';
import HeaderLogo from '../HeaderLogo';
import Main from '../Main';

const App = ({ searchId, getFlights, returnID }) => {
  useEffect(() => {
    returnID();
  }, [returnID]);

  useEffect(() => {
    const getTickets = () => {
      if (searchId) {
        getFlights(searchId);
      }
    };
    getTickets();
  }, [getFlights, searchId]);

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
