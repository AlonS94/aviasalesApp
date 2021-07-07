import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CardResults.scss';
import FlightInformation from '../../../Helpers-block/Card-flight-information';
import LoadingIndicator from '../../Loading-indicator';
import NoFlightsFound from '../No-flights-found';

const CardResults = ({ tickets, filters, sorting, loading }) => {
  const activeCheckboxes = filters.filter((elem) => elem.checked);
  function getOverlappingTransfers(checkboxes, transfers) {
    return checkboxes.filter((elem) => elem.transfers === transfers).length;
  }

  const { name } = sorting.filter((elem) => elem.checked)[0];

  function sort(arr, nameSort) {
    let newSorts;
    if (nameSort === 'САМЫЙ ДЕВЕШВЫЙ') newSorts = arr.sort((elem1, elem2) => elem1.price - elem2.price);
    if (nameSort === 'САМЫЙ БЫСТРЫЙ') {
      newSorts = arr.sort((elem1, elem2) => elem1.segments[0].duration - elem2.segments[0].duration);
    }
    return newSorts;
  }

  const sortTickets = sort(tickets, name);

  const cards = sortTickets.map(({ price, carrier, segments }) => {
    const thither = segments[0];
    const back = segments[1];
    const overlapTransfersThithers = getOverlappingTransfers(activeCheckboxes, thither.stops.length);
    const overlapTransfersBacks = getOverlappingTransfers(activeCheckboxes, back.stops.length);
    let className = 'CardResults CardResults_padding CardResults_margin';
    if (!overlapTransfersThithers || !overlapTransfersBacks) className += ' hidden';
    const srcLogo = `//pics.avs.io/99/36/${carrier}.png`;
    return (
      <div key={price + carrier + thither.date + back.date} className={className}>
        <div className="CardResults__header CardResults__header_padding">
          <span className="CardResults__price">{price.toLocaleString('ru')} Р</span>
          <img src={srcLogo} alt="лого авиакомпании" />
        </div>
        <FlightInformation information={thither} />
        <FlightInformation information={back} />
      </div>
    );
  });
  const numberOfHiddenFlight = cards.filter((card) => card.props.className.includes('hidden'));

  return (
    <>
      {tickets.length && numberOfHiddenFlight.length === cards.length ? <NoFlightsFound /> : cards}
      {loading ? <LoadingIndicator /> : null}
    </>
  );
};

CardResults.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  filters: PropTypes.arrayOf(PropTypes.object),
  sorting: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

CardResults.defaultProps = {
  tickets: [{}],
  filters: [{}],
  sorting: [{}],
  loading: false,
};

const mapStateToProps = (state) => ({
  counter: state.value,
  filters: state.filters,
  tickets: state.tickets,
  sorting: state.sorting,
  loading: state.loading,
});

export default connect(mapStateToProps)(CardResults);
