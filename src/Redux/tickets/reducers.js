const ticketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'getFlights':
      return [...state, ...action.tickets];

    default:
      return state;
  }
};

export default ticketsReducer;
