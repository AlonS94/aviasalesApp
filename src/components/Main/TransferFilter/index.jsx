import React from 'react';
import newWrapper from '../../newWrapper';
import './TransferFilter.scss';
import Filter from './Filter';

const TransferFilter = () => (
  <>
    <h2 className="TransferFilter__header TransferFilter__header_padding">Количество пересадок</h2>
    <ul className="TransferFilter__list">
      <Filter />
    </ul>
  </>
);

export default newWrapper(TransferFilter, ['TransferFilter']);
