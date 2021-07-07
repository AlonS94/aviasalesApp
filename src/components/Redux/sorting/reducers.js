const cheapest = 'САМЫЙ ДЕВЕШВЫЙ';
const fastest = 'САМЫЙ БЫСТРЫЙ';
const allSorting = [
  { name: cheapest, checked: true },
  { name: fastest, checked: false },
];

const sorting = allSorting.map(({ name, checked }) => ({
  name,
  checked,
}));

const sortingReducer = (state = sorting, action) => {
  switch (action.type) {
    case 'sortingChange':
      return action.newSorting;

    default:
      return state;
  }
};

export default sortingReducer;
