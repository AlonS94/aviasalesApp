const all = 'Все';
const direct = 'Без пересадок';
const oneTransfer = '1 пересадка';
const twoTransfers = '2 пересадки';
const threeTransfers = '3 пересадки';
const allName = [
  { name: all, transfers: all },
  { name: direct, transfers: 0 },
  { name: oneTransfer, transfers: 1 },
  { name: twoTransfers, transfers: 2 },
  { name: threeTransfers, transfers: 3 },
];

const filters = allName.map(({ name, transfers }) => ({
  name,
  checked: true,
  transfers,
}));

const filtersdReducer = (state = filters, action) => {
  switch (action.type) {
    case 'filterChange':
      return action.newFilters;

    default:
      return state;
  }
};

export default filtersdReducer;
