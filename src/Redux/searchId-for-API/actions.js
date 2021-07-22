import DataAPI from '../../dataAPI';

const API = new DataAPI();

const returnID = () => (dispatch) => {
  API.getSearchId().then((id) => {
    dispatch({ type: 'getSearchId', id });
  });
};

export default returnID;
