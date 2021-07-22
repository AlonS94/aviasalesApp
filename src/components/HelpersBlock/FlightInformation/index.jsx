import React from 'react';
import PropTypes from 'prop-types';
import { getTime, arrivalTime, timeСonverter } from './FlightInformation.utils';

const FlightInformation = ({ information }) => {
  const { origin, destination, date, stops, duration } = information;

  function choiceOfDeclension(num) {
    if (num === 0) return 'без пересадок';
    if (num === 1) return '1 пересадка';
    if (num >= 2 && num <= 4) return `${num} пересадки`;
    if (num > 5) return `${num} пересадок`;
    return '';
  }

  return (
    <div className="CardResults__flightInformation CardResults__flightInformation_padding">
      <div>
        <p>
          {origin} – {destination}
        </p>
        <p className="CardResults__detailedInformation">
          {getTime(date)} – {arrivalTime(date, duration)}
        </p>
      </div>
      <div>
        <p>В пути</p>
        <p className="CardResults__detailedInformation"> {timeСonverter(duration)}</p>
      </div>
      <div>
        <p>{choiceOfDeclension(stops.length)}</p>
        <p className="CardResults__detailedInformation">{stops.join(', ')}</p>
      </div>
    </div>
  );
};

FlightInformation.propTypes = {
  information: PropTypes.shape({
    date: PropTypes.string,
    destination: PropTypes.string,
    duration: PropTypes.number,
    origin: PropTypes.string,
    stops: PropTypes.arrayOf(PropTypes.string),
  }),
};

FlightInformation.defaultProps = {
  information: {},
};

export default FlightInformation;
