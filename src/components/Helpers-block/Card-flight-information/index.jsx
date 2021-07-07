import React from 'react';
import PropTypes from 'prop-types';

const FlightInformation = ({ information }) => {
  const { origin, destination, date, stops, duration } = information;
  /* ветка функций связанных со временем */
  function getTime(dates) {
    const newDate = new Date(dates);
    let hours = newDate.getHours();
    let min = newDate.getMinutes();
    if (String(hours).length < 2) hours = `0${hours}`;
    if (String(min).length < 2) min = `0${min}`;
    return `${hours}:${min}`;
  }

  const timeEditing = (hour, min) => {
    let newHour = +hour;
    let newMin = +min;
    if (newMin >= 60) {
      newHour = +hour + 1;
      newMin = +min - 60;
      return timeEditing(newHour, newMin);
    }
    if (String(newMin).length < 2) newMin = `0${newMin}`;
    if (String(newHour).length < 2) newHour = `0${newHour}`;
    return [newHour, newMin];
  };

  function roundingOfDays(hours) {
    let newHours = +hours;
    if (newHours >= 24) {
      newHours -= 24;
      return roundingOfDays(newHours);
    }
    return newHours;
  }

  function arrivalTime(departureTime, travelTime) {
    let newDepartureTime = new Date(departureTime);
    newDepartureTime = newDepartureTime.getHours() * 60 + +newDepartureTime.getMinutes();
    const newTIme = newDepartureTime + travelTime;
    // eslint-disable-next-line prefer-const
    let [newHours, newMin] = timeEditing(0, newTIme);
    newHours = roundingOfDays(newHours);
    return `${newHours}:${newMin}`;
  }

  const timeСonverter = (time) => {
    let [hour, min] = (time / 60).toFixed(2).split('.');
    if (min >= 60) [hour, min] = timeEditing(hour, min);
    return `${hour}ч ${min}м;`;
  };

  /* Функции с датами закончились */

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
