import React from 'react';
import TransferFilter from './TransferFilter';
import SearchResults from './SearchResults';
import './Main.scss';

const Main = () => (
  <main className="main">
    <TransferFilter />
    <SearchResults />
  </main>
);

export default Main;
