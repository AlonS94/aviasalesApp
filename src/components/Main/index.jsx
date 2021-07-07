import React from 'react';
import TransferFilter from './Transfer-filter';
import SearchResults from './Search-results';
import './Main.scss';

const Main = () => (
  <main className="main">
    <TransferFilter />
    <SearchResults />
  </main>
);

export default Main;
