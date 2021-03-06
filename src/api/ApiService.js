import Axios from 'axios';
import { createAccessToken, createComposedUrl } from './apiHelper';

class ApiService {
  constructor() {
    this._token = '';
  }

  _baseUrl = 'https://us.api.blizzard.com/hearthstone/';
  _API_KEY = 'c398c48c74e54edfb88e0ea707b072ac';
  _API_SECRET = 'QeMdpzeU47qwtnvQEy8m6E1WKznc5iE2';

  async initialize() {
    const response = await createAccessToken(this._API_KEY, this._API_SECRET)
    this._token = response.access_token
  }

  async getSimpleResource(resource, option) {
    const composedUrl = `${this._baseUrl}${resource}/${option}?locale=en_US&access_token=${this._token}`
    const response = Axios.get(composedUrl).then((res) => res).catch((err) => err)
    return response
  }

  async getResource(resource, requestOptions, page) {
    const composedUrl = createComposedUrl(this._baseUrl, resource, this._token, requestOptions, page)
    const response = Axios.get(composedUrl).then((res) => res).catch((err) => err)
    return response
  }

  async getMetadata() {
    const response = this.getResource('metadata', { locale: 'en_US' }).then((res) => res).catch((err) => err);
    return response
  }

  async getCards(requestOptions, page) {
    const response = await this.getResource('cards', requestOptions, page);
    return response
  }

  async getCard(cardId) {
    const response = await this.getSimpleResource('cards', cardId);
    return response
  }

}

const api = new ApiService();
export default api;