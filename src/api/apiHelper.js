export function createAccessToken(apiKey, apiSecret, region = 'us') {
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

export function createComposedUrl(baseUrl, resource, token, requestOptions, page) {
    let url = `${baseUrl}${resource}?region=us&access_token=${token}`
    for (const option in requestOptions) {
      if (requestOptions[option] || requestOptions[option] == '0') {
        let reformedOption;
        if (requestOptions[option] === 'manaCost') {
            reformedOption = requestOptions[option]
        } else {
            if (typeof requestOptions[option] === 'string') {
                reformedOption = requestOptions[option].toLowerCase().replace('\'', '').split(' ').join('-')
            } else {
                reformedOption = requestOptions[option]
            }
        }
        url += `&${option}=${reformedOption}`
      }
    }
    url += `&page=${page}`
    return url
}