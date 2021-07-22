import React from 'react';
import './NoFlightsFound.scss';
import newWrapper from '../../../newWrapper';

const NoFlightsFound = () => <p>Рейсов, подходящих под заданные фильтры, не найдено</p>;

export default newWrapper(NoFlightsFound, ['NoFlightsFound']);
