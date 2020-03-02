class ApiService {
  _baseUrl = 'https://us.api.blizzard.com/hearthstone/';
  _accessToken = 'access_token=USbD1oP8bUWFBfYrOK06megC7O2jZAdAEb';
  _locale = 'locale=en_US';

  async getResource(resource, page) {
	const res = await fetch(
	  `${this._baseUrl}${resource}?${this._locale}&${this._accessToken}&page=${page || 1}`
	);
	return await res.json();
  }

  async getCards(page) {
	const response = await this.getResource('cards', page);
	return response
  }
}
const api = new ApiService();
export default api;
