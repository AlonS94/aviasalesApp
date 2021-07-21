import DataAPI from '../../../data-API';

const API = new DataAPI();

const returnID = () => (dispatch) => {
  API.getSearchId().then((id) => {
    dispatch({ type: 'returnID', id });
  });
};

export default returnID;
