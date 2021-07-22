export function getTime(dates) {
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

export function arrivalTime(departureTime, travelTime) {
  let newDepartureTime = new Date(departureTime);
  newDepartureTime = newDepartureTime.getHours() * 60 + +newDepartureTime.getMinutes();
  const newTIme = newDepartureTime + travelTime;
  // eslint-disable-next-line prefer-const
  let [newHours, newMin] = timeEditing(0, newTIme);
  newHours = roundingOfDays(newHours);
  return `${newHours}:${newMin}`;
}

export const timeСonverter = (time) => {
  let [hour, min] = (time / 60).toFixed(2).split('.');
  if (min >= 60) [hour, min] = timeEditing(hour, min);
  return `${hour}ч ${min}м;`;
};
