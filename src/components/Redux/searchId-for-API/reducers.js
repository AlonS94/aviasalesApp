const searchIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'returnID':
      return action.id;

    default:
      return state;
  }
};

export default searchIdReducer;
