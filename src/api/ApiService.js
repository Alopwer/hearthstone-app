import Axios from 'axios';

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
    return response
  }

  async getResource(resource, page) {
    const response = await Axios.get(`${this._baseUrl}${resource}?region=us&page=${page}&access_token=${this._token}&locale=en_US`)
    return response
  }

  async getCards(page) {
    const response = await this.getResource('cards', page);
    return response.data.cards
  }

}

function createAccessToken(apiKey, apiSecret, region = 'us') {
  return new Promise((resolve, reject) => {
      let credentials = Buffer.from(`${apiKey}:${apiSecret}`);

      const requestOptions = {
          host: `${region}.battle.net`,
          path: '/oauth/token',
          method: 'POST',
          headers: {
              'Authorization': `Basic ${credentials.toString('base64')}`,
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      };

      let responseData = '';

      function requestHandler(res) {
          res.on('data', (chunk) => {
              responseData += chunk;
          });
          res.on('end', () => {
              let data = JSON.parse(responseData);
              resolve(data);
          });
      }

      let request = require('https').request(requestOptions, requestHandler);
      request.write('grant_type=client_credentials');
      request.end();

      request.on('error', (error) => {
          reject(error);
      });
  });
}

const api = new ApiService();
export default api;