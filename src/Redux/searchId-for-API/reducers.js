const searchIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'getSearchId':
      return action.id;

    default:
      return state;
  }
};

export default searchIdReducer;
