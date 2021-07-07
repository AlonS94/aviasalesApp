import React from 'react';
import SortResults from './Sort-results';
import CardResults from './Card-results';
import './SearchResults.scss';

const SearchResults = () => (
  <div className="SearchResults SearchResults_margin">
    <SortResults />
    <CardResults />
  </div>
);

export default SearchResults;
