export default class DataAPI {
  url = 'https://front-test.beta.aviasales.ru/';

  bodyForRequest = async (urls, body) => {
    const resures = await fetch(`${this.url}${urls}`, body);

    if (!resures.ok) {
      if (resures.status === 500) return { stop: false, tickets: [] };
      throw new Error(`Error ${resures.status}`);
    }
    const result = await resures.json();
    return result;
  };

  getSearchId = async () => {
    const searchId = await this.bodyForRequest(`search`);
    return searchId.searchId;
  };

  getTickets = async (searchId) => {
    const tickets = await this.bodyForRequest(`tickets?searchId=${searchId}`);
    return tickets;
  };
}
