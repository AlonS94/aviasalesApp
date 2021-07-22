import React from 'react';
import SortResults from './SortResults';
import CardResults from './CardResults';
import './SearchResults.scss';

const SearchResults = () => (
  <div className="SearchResults SearchResults_margin">
    <SortResults />
    <CardResults />
  </div>
);

export default SearchResults;
