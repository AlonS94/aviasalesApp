import React from 'react';
import { connect } from 'react-redux';
import newWrapper from '../../../newWrapper';
import valueDispatch from '../../../../Redux/actions';
import './SortResults.scss';

const SortResults = ({ sorting, sortingChange }) => {
  function changeSorting(arr) {
    const newSorting = arr.map((elem) => ({ ...elem, checked: !elem.checked }));
    sortingChange(newSorting);
  }

  const sortingMenu = sorting.map(({ name, checked }) => {
    let className = 'SortResults__btn';
    className += checked ? ' SortResults__btnActive' : ' SortResults__btnNonActive';
    return (
      <button key={name} className={className} type="button" onClick={() => changeSorting(sorting)}>
        {name}
      </button>
    );
  });
  return sortingMenu;
};

const mapStateToProps = (state) => ({
  counter: state.value,
  filters: state.filters,
  tickets: state.tickets,
  searchId: state.searchId,
  sorting: state.sorting,
});

export default connect(mapStateToProps, valueDispatch)(newWrapper(SortResults, ['SortResults', 'SortResults_margin']));
