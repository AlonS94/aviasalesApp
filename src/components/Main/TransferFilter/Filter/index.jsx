/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { connect } from 'react-redux';
import React from 'react';
import valueDispatch from '../../../../Redux/actions';
import './Filter.scss';

const Filter = ({ filters, filterChange }) => {
  const changeCheckboxesAfterALL = (arr) => {
    const { checked } = arr.filter((elem) => elem.name === 'Все')[0];
    const newArr = arr.map((elem) => ({ ...elem, checked }));
    return newArr;
  };

  const changeCheckboxesAfterOther = (arr) => {
    let all = arr.filter((elem) => elem.name === 'Все')[0];
    const idx = arr.findIndex((elem) => elem.name === 'Все');
    const amountOfChecks = arr.filter((elem) => elem.checked === true).length;
    if (amountOfChecks === 4) {
      all = { ...all, checked: !all.checked };
      return [...arr.slice(0, idx), all, ...arr.slice(idx + 1)];
    }
    return arr;
  };

  const changeFilter = (name) => {
    let newFilters = filters.slice();
    const idx = newFilters.findIndex((elem) => elem.name === name);
    const newElem = { ...newFilters[idx], checked: !newFilters[idx].checked };
    newFilters = [...newFilters.slice(0, idx), newElem, ...newFilters.slice(idx + 1)];
    if (name === 'Все') newFilters = changeCheckboxesAfterALL(newFilters);
    if (name !== 'Все') newFilters = changeCheckboxesAfterOther(newFilters);
    filterChange([...newFilters.slice(0, idx), newElem, ...newFilters.slice(idx + 1)]);
  };

  const allFilters = filters.map(({ name, checked }, index) => (
    <li
      tabIndex={index}
      role="checkbox"
      aria-checked={checked}
      aria-labelledby={name}
      key={name}
      className="TransferFilter_padding"
      onClick={(event) => {
        changeFilter(event.target.closest('li').innerText);
      }}
      onKeyDown={(event) => {
        if (event.key === 13 || event.key === 0 || event.key === 32) {
          changeFilter(event.target.closest('li').innerText);
        }
      }}
    >
      <label>
        <input
          className="TransferFilter__checkbox"
          type="checkbox"
          onClick={(event) => event.stopPropagation()}
          checked={!!checked}
          readOnly
        />
        <span className="checkbox" />
        {name}
      </label>
    </li>
  ));
  return allFilters;
};

const mapStateToProps = (state) => ({
  counter: state.value,
  tickets: state.tickets,
  searchId: state.searchId,
  filters: state.filters,
});

export default connect(mapStateToProps, valueDispatch)(Filter);
